import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { signIn } from "next-auth/react";// Importa signIn de NextAuth

export const POST = async (req: NextRequest) =>{
    const{username, email, password} = await req.json();

    
    try {
    const usernameExists = await prisma.user.findUnique({where: {username}});

    const emailExists = await prisma.user.findUnique({where: {email}});

  
    if(usernameExists){
        return NextResponse.json({error: "El usuario ya existe"});
    } else if (emailExists){
        return NextResponse.json({error: "El correo ya existe"});
    } 
    const passwordHashed = await bcrypt.hash(password,12)


    const user = await prisma.user.create({
        data:{
            username,
            email,
            password: passwordHashed, 
        },
    });

 // Después de crear el usuario, iniciamos sesión automáticamente
        // `signIn` nos permite autenticar automáticamente al usuario
        await signIn("credentials", {
            redirect: false, // Usamos redirect false para manejar la redirección manualmente
            email,
            password
        });

    // UNA VEZ QUE TODO SALGA BIEN(CREAR USUARIO)
    // VAMOS A RETORNAR EL RESULTADO CON UN "okey:true" CON UN MENSAJE
    // Y LE MANDAMOS UN CODIGO DE ESTADO QUE ES DE 200
    return NextResponse.json({ok: true, message:"Usuario registrado exitosamente"},
        {status: 200}
    );
    //ACA CAPTURAMOS EL ERROR
    // Y DEVOLVEMOS EL RESULTADO DEL ERROR CON UN STATUS DE 500
    } catch (error) {
        console.error(error);  // AQUI IMPRIMIMOS EL ERROR EN CONSOLA PARA QUE SEA MAS SENCILLO DEBUGUEARLO
        return NextResponse.json({error:"Error interno del Servidor"},{status: 500});
    }
};
// CON TODO ESTO YA TENDRIAMOS LO QUE ES LA RUTA DEL "api" PARA REGISTRAR USUARIOS
