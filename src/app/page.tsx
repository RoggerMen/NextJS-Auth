
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Content from "./(interface)/components/Content";



// TIENE QUE SER async PORQUE EL "auth()" ES UNA FUNCION ASINCRONA PARA PODER USAR EL "await" 
export default async function Home() {
  const session = await auth();
  if(!session){
  return(
      <main >
        <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
          <Link className="h-10 rounded-md bg-zinc-950 text-zinc-100 flex items-center justify-center px-6 text-sm" href={'/login'}>Inicia Sesión</Link>

          <Link className="h-10 rounded-md border border-zinc-950 text-zinc-950 flex items-center justify-center px-6 text-sm" href={'/register'}>Registrate</Link>
        </div>
      </main>
      );
    }
}
