'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
// IMPORTAMOS EL ICONO DE UNA LIBRERIA QUE SE INSTALA DE FORMA AUTOMATICA
// CUANDO INSTALAMOS LO QUE ES "shadcn" ES LA LIBRERIA QUE SE LLAMA "lucide-react"
// DE AHI PODEMOS IMPORTAR UN MONTON DE ICONOS
import { ChevronLeft, Loader2 } from 'lucide-react';
// este es para mostrar alertas
import toast from 'react-hot-toast';
// es para hacer consultas a la base de datos OSEA CONECTEN Y HAGA LAS CONSULTAS DE PRISMA
import axios from 'axios';
import { Button } from '@/components/ui/button';
// IMPORTAMOS EL METODO QUE NOS DA LA BIBLIOTECA "next auth"
// ESTA ES LA FORMA EN LA QUE IMPORTAMOS EL METODO
import { signIn } from 'next-auth/react';
// CUANDO NOSOTROS INICIAMOS SESION CORRECTAMENTE VAMOS A REDIRIGIR A LA PERSONA
// PARA ESO NECESITAMOS IMPORTAR UN "hook" DE NEXTJS QUE ES "useRouter"
import { useRouter } from 'next/navigation';

// AQUI CREAMOS EL ESQUEMA DE LO QUE VA A SER EL FORMULARIO
const formSchema = z.object({
    username: z.string().min(1, {message: "Campo Obligatorio"}),
    email: z.string().email({message:"Debe ser Formato Email"}).min(1, {message: "Campo Obligatorio"}),
    password: z.string().min(1, {message: "Campo Obligatorio"})
});


// AL ULTIMO
// CREAMOS UN INTERFACE PARA QUE NOS APAREZCA EL INICIAR SESION Y NOS PIDA CORREO Y CONTRASEÑA
// LO CAMBIAMOS HACIENDO QUE NUESTRO COMPONENTE RECIBA UNA PROPIEDAD 
// DONDE VA A TENER ESTOS 2 MODOS
// QUE VA A SER "mode: login || register"
// QUE VA A SER "login o register"
interface Props{
    mode: 'login' | 'register';
}


// LO RECIBIMOS AQUI A "mode"
const AuthForm = ({ mode }: Props) => {

    const router = useRouter();

// LUEGO CREAMOS LO QUE VA ALMACENAR NUESTRO USUARIO CON EL HOOK "useForm"
// Este va a inferir de nuestra variable formSchema 
// ESTO RECIBE UN "resolver" que va a ser el zodResolver y este va inferirlo de nuestro "formSchema"
// Esto va a recibir valores por DEFECTO tambien
// y que el username, email, password van a estar vacios ""
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        // COMO EN "formSchema" CON EL "zod" DECIMOS QUE TIENE QUE TENER ALMENOS UN CARACTER LE COLOCAMOS ESTO
        // DE QUE SI ESTAMOS EN EL FORMULARIO DE REGISTRO QUE ESTO ESTE VACIO
        // Y SI ESTAMOS EN OTRO QUE NO SEA "register" OSEA "login" NOS MANDE CON UN CARACTER CUALQUIERA PERO QUE ALMENOS TENGO 1 CARACTER DE ACUERDO AL "zod"
        // AL FINAL NO LO USAMOS PORQUE PARA EL INICIO DE SESION USAMOS EL "email" y "password" PERO LO COLOCAMOS PARA QUE NO NOS GENERE EL ERROR POR EL "zod" QUE NOS DICE QUE TENEMOS QUE TENER ALMENOS 1 CARACTER
        username: mode === "register" ? "" : "a",
        email: "",
        password: ""
    },
});
// LUEGO CREAMOS LA FUNCION QUE VA A MANEJAR EL EVENTO DE ENVIO DEL FORMULARIO 
// ENTONCES LE VAMOS A DECIR QUE VA A RECIBIR VALORES
// Y QUE LOS VALORES SE CREAN APARTIR DE ZOD 
// LO CUAL ESTO TAMBIEN LO VA A INFERIR DE NUESTRO formSchema
const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // POR EL MOMENTO SOLO MOSTRAMOS EN CONSOLA LOS VALORES
    //console.log(values);

// SI TODO VA BIEN EJECUTAMOS EN EL TRY NUESTRA LOGICA PARA HACER LA CONSULTA EN NUESTRA "api"
// ENTONCES AQUI YA ESTAMOS HACIENDO LA PETICION A LA "api"
// PARA QUE VALIDE SI EL USUARIO EXISTE Y SI NO EXISTE CREA Y SI EXISTE EL USUARIO ME DEVUELVE UN ERROR
    try {
        //aplicamos una condicional dependiendo si nos encontramos en el "login" o en el "register"
        // QUEREMOS QUE SE NOS APLIQUEN 2 CODIGOS DIFERENTES
        // SI EL MODO ES DE "register" QUE ME EJECUTE EL CODIGO QUE ESTA DENTRO DEL IF
        if (mode === "register"){
            // ACA HACEMOS UNA CONSULTA
        // QUE NOS VA A DEVOLVER UN "response"
        // QUE VA A SER ASINCRONO LA CUAL ESTO NOS VA A SER LA CONSULTA A "/api/users/api/register"
        // QUE /api/users/api/register ESTO ES DONDE ESTA NUESTRA RUTA con el archivo route.ts
        // Y LE MANDAMOS LOS VALORES AHI
        // APLICAMOS DESTRUCTURACION Y VAMOS A OBTENER LOS DATOS DE LA RESPUESTA QUE NOS DARAN EN EL "data"
        const {data} = await axios.post("/api/users/api/register", values)

        //Y ACA LE DECIMOS QUE SI TODO SALE BIEN OSEA NOS DEVUELVE UN ok
        if(data.ok){// Nos muestra un mensaje de EXITO 
        // EL "message" es del "route.ts" de la linea 56 POR SI TODO SALE BIEN NOS MUESTRA ESE MENSAJE DE "Usuario registrado exitosamente"
            toast.success(data.message);
        }// Y SI POR ALGUN MOTIVO ME DEVUELVE UN ERROR osea si "data.error" EXISTE
        else if(data.error){
            // VAMOS A MOSTRAR EL ERROR QUE VA A SER "data.error" como alerta por el toast que nso va a mostrar en pantalla
            toast.error(data.error);
        }
        } else{ // SINO EJECUTAME ESTE CODIGO
            // AQUI INICIALIZAMOS AL METODO "signIn" y le colocamos el PROVEEDOR POR EL QUE ESTAMOS INICIANDO SESION(credentials)
            // LUEGO ESTO RECIBE UN OBJETO
            //DONDE LE DECIMOS QUE SI QUEREMOS QUE NOS REDIRECCIONE pero le decimos que NO CON EL "false"
            // Y QUE "email" VENDRIA DEL VALOR DEL INPUT
            // Y "password" DE LA MISMA MANERA
            const response = await signIn("credentials",{
                redirect:false,
                email: values.email,
                password: values.password,
            });

            // LUEGO LO MOSTRAMOS EN CONSOLA PARA VERIFICAR LA RESPUESTA QUE NOS DA
            //console.log(response);
            //ACA SI ES QUE EL ERROR EXISTE MOSTRAMOS UN MENSAJE DE ERROR COMO ALERT DEL "toast"
            if(response?.error){
                toast.error("Credenciales no validas");
                // SI EN TODO CASO ES "response.ok" MOSTRAR UN MENSAJE DE EXITO
            } else if (response?.ok){
                toast.success("Inicio de Sesión exitoso!");
                // TODO ESTO LO HACEMOS CON EL "useRouter" PARA NAVEGAR
                // CON ESTO HAGO REDIRIGIR A LA PAGINA PRINCIPAL
                router.push("/");
                // Y ACTUALICE LA PAGINA PARA QUE SE REFRESQUE
                router.refresh();
            }
        }
    } 
    // SI DETECTAMOS UN ERROR DURANTE EL PROCESO 
    // IMPORTAMOS "toast" DE LA LIBRERIA 'react-hot-toast' Y MOSTRAMOS UN ERROR
    catch (error) {
        console.error(error); // Agrega un log aquí para más detalles
        toast.error("Algo salio mal vuelve a intentarlo")
    }

};

  return (
    /*//IMPORTAMOS EL COMPONENTE "form" DE SHADCN */
    <div className='w-full flex items-center justify-center flex-col gap-6'>

        <div className='text-sm font-medium'>
            <Link href={'/'} className='flex items-center gap-0.5 py-1 border-b border-transparent hover:border-b-zinc-950 transition-all duration-300'>
            <ChevronLeft className='w-4 h-4' />
            <span>Volver al Inicio
            </span>
            </Link>
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-[380px] px-6 py-6 border border-zinc-300 rounded-md space-y-3 '>

{/*DE ACUERDO A LO QUE DA LA "interface Props"
RENDERIZAMOS EL COMPONENTE DE FORMA CONDICIONAL
LE DECIMOS QUE SI EL "mode" ESTA EN "register"
ME MUESTRE "Registrate" SINO QUE ME MUESTRE "Inicia Sesión
DESPUES PASAMOS LOS DATOS A LAS RUTAS "login" Y "register"*/ }
            <h2 className='font-mediun text-lg text-center'> {mode === "register" ? "Registrate":"Inicia Sesión"} </h2>



            <div>
                {/*RENDERIZAMOS TAMBIEN ESTE COMPONENTE DE FORMA CONDICIONAL
                VAMOS A DECIR QUE SI EL "mode" es de "register"
                RENDERIZAMOS ESTO DONDE ENCAPSULAMOS A EL COMPONENTE <FormField /> */}
                {mode === "register" && (
                
                <FormField control={form.control} name="username" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Usuario</FormLabel>
                        <FormControl>
                            <Input placeholder="Ejm: RoggerMeneses" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
            )}

                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="ejm: RoggerMeneses@gmail.com" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />

                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="******************" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
            </div>

{/* EL BOTON QUE ESTABA AQUI
*/}

{/*AQUI TOMAMOS EL ESTADO DEL FORMULARIO 
que va a contener al "form" que creamos al inicio 
* LA CUAL ES EL QUE ALMACENA EL ESTADO DEL FORMULARIO COMO VA YENDO
* LA VARIABLE QUE NOS INTERESA ES "isSubmitting" 
* Y SI SE ESTA ENVIANDO MUESTRAS ALGO Y SI NO SE ENVIA MUESTRA LO OTRO ESO LO HACEMOS CON OPERADOR TERNARIO QUE VIENE A HACER COMO UNA CONDICIONAL IF ELSE DE MANERA MAS CORTA
* SI SE ESTAN ENVIANDO QUIERO QUE ME MUESTRES
CON UN ICONO DE CARGA EN EL BOTON CUANDO SE PRESIONE Y ENVIE
QUE SI ES "register" MUESTRE "Registrando..."
Y SINO ES "register" QUE ENVIE "Iniciando Sesión..." 

* SI NO SE ESTA ENVIANDO MUESTRAME SOLO EL BOTON DONDE LO RENDERIZAMOS DE FORMA CONDICIONAL
*/}
    <div>
        
        {form.formState.isSubmitting ? <>
        <Button disabled className='w-full'>
            <Loader2 className='w-4 h-4 animate-spin'/>
            <span>{mode === "register" ? "Registrando..." : "Iniciando Sesión..."}</span>
        </Button>
        </> :
        <>
        <div className='flex justify-center items-center'>
<button type="submit" className='w-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 py-2 px-4 rounded-lg shadow-lg transition-all w-32'>{mode === "register" ? "Registrar" : "Iniciar Sesión"}</button>
</div> 
        </>}
    </div>


            </form>
        </Form>

        <div className='text-sm'>
            {/* decimos si el modo(mode) es igual a "register" 
            ? me muestras algo SINO me muestras lo otro 
            Y SI NAVEGAMOS DE UNA RUTA A OTRA*/}
            {mode === "register" ? <>
                <p>¿Ya tienes una cuenta? <Link className='font-semibold hover:underline transition-all duration-200' href="/login">Inicia Sesión</Link></p>
                </> : <> <p>¿Aún no tienes una cuenta? <Link className='font-semibold hover:underline transition-all duration-200' href="/register">Registrate</Link></p> </>}
        </div>
    </div>

  )
}

export default AuthForm