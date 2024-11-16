import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FC, ReactNode } from "react";
import { FcGoogle } from "react-icons/fc";


interface GoogleSignInButtonProps {
    children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
    const loginWithGoogle = () => signIn("google",{callbackUrl: "http://localhost:3000/"});

    return (
        <Button onClick={loginWithGoogle} className="w-full my-4">
            <FcGoogle size={84} /> {/* Icono de Google con color y tamaño personalizado */}
            {children}
        </Button>
    );

}

export default GoogleSignInButton;