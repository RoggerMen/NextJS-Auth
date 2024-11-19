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
          // CUANDO NOSOTROS ENVIAMOS LOS DATOS AQUI ES DONDE SE VA A MANEJAR LA AUNTETICACION
    // ES EL METODO "authorize" QUE ES UNA FUNCION ASINCRONA
    // ESTA FUNCION ASINCRONA VA A ESTAR RECIBIENDO LAS CREDENCIALES QUE NOSOTROS VAMOS A ESTAR MANDANDO
    //(credentials) ESTAS CREDENCIALES VAN A OBTENER 2 COSAS
    // VA A OBTENER EL "email" y la "contraseña" QUE NOSOTROS LE ESTAMOS MANDANDO
    authorize: async (credentials) =>{
      // AQUI ES DONDE NOSOTROS EJECUTAMOS LA LOGICA DEL INICIO DE SESION
      // AQUI LO QUE VAMOS A HACER ES ONTENER AL USUARIO DE PRISMA
      // EL "email" QUE A NOSOTROS NOS LLEGA VAMOS A ESTAR FILTRANDO A ESE USUARIO, VAMOS A ESTAR BUSCANDOLO 
      // LE DECIMOS COLOCAMOS UNA CONDICIONAL(?) Y Le DECIMOS QUE LO TOMO COMO UN "string"
      const user = await prisma.user.findUnique({where:{email: credentials?.email as string },
      });
      // UNA VEZ NOSOTROS OBTENEMOS AL USUARIO AHI POR EL "email" 
      // AQUI LO QUE HACEMOS ES VERIFICAR SI LA CONTRASEÑA QUE NOS ESTAN ENVIANDO DEL FORMULARIO ES CORRECTA O NO
      // PRIMERO VERIFICAMOS SI EL USUARIO EXISTE
      // SI EL USUARIO EXISTE AQUI VERIFICAMOS LA CONTRASEÑA
      if(user){
        // AQUI PRIMERO LE VAMOS A PASAR LO QUE ES LA CONTASEÑA COMO TAL 
        // Y LUEGO LE PASAMOS LO QUE ES EL HASH(QUE EL HASH LO TENEMOS EN LO QUE ES EL "user.password")
        // ACA TAMBIEN LO TOMAMOS COMO UN "string" A EL "password"
        // EL METODO "compare" LO QUE HACE ES COMPARAR EL password credentials como "string" QUE ESTAMOS PASANDO CON EL PASWARD HASHEADO QUE VIENE A SER "user.password" que viene de la base de datos
        // Y SI LAS CONTRASEÑAS COINCIDEN DEVUELVE TRUE Y SI NO DEVUELVEN FALSE
        const correctPassword = await bcrypt.compare(credentials?.password as string, user.password)

        // ACA LE VAMOS A DECIR QUE SI LA CONTRASEÑA ES CORRECTA ( PODEMOS DEVOLVER AL USUARIO COMPLETO) PERO EN ESTE CASO ME VAS A DEVOLVER EL "id del usuario", el "email del usuario" y el "nombre del usuario"
        if(correctPassword){
          return { id: user.id, email: user.email, name: user.username};
        } else { // Y SI LA CONTRASEÑA NO ES CORRECTA NOS DARA UN MENSAJE DE ERROR
          throw new Error("Contraseña incorrecta");
        }

      }
      // Y SI EL USUARIO NO EXISTE VERIFICAMOS SIMPLEMENTE DEVOLVEMOS UN ERROR 
      throw new Error("El usuario no existe");

    },
    },
  ),
  ],
});
// CON TODO ESTO YA TENEMOS NUESTRA LOGICA DE AUTENTICACION PARA VALIDAR EL INICIO DE SEION DE LOS USUARIOS