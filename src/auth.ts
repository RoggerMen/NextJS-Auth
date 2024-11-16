import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: 'database', // Cambia la estrategia de sesión a 'database' para manejar el registro sin JWT.
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
          include: { accounts: true },
        });

        if (user) {
          const correctPassword = await bcrypt.compare(
            credentials?.password as string,
            user.password || ""
          );

          if (correctPassword) {
            return { id: user.id, email: user.email, name: user.username };
          } else {
            throw new Error("Contraseña incorrecta");
          }
        }
        throw new Error("El usuario no existe");
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const userExists = await prisma.user.findUnique({
          where: { email: profile?.email as string },
        });
  
        if (!userExists) {
          // Si el usuario no existe, crear una nueva cuenta
          await prisma.user.create({
            data: {
              email: profile?.email,
              name: profile?.name,
              username: profile?.email?.split("@")[0],
              provider: account.provider, // Almacena el proveedor de autenticación
              // Agrega más datos según el esquema que necesites.
            },
          });
        } else if (userExists && userExists.provider !== "google") {
          // Si el usuario ya existe y fue creado por otro proveedor
          throw new Error("Este correo ya está registrado con otro método de autenticación.");
        }
      }
      return true;
    },
    async session({ session, user }) {
      const userData = await prisma.user.findUnique({
        where: { email: session.user?.email || "" },
      });
      if (userData) {
        session.user = {
          id: userData.id,
          email: userData.email || "",
          name: userData.username,
          emailVerified: userData.emailVerified || null, // Proporciona un valor predeterminado para emailVerified
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/login', // Cambia a la ruta de tu página de inicio de sesión personalizada si la tienes
  },
});
