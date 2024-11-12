'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HomeIcon, UserIcon } from "lucide-react"; // Asegúrate de tener lucide-react instalado


const Sidebar = () => {
  const router = useRouter();
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 md:top-0 md:left-0 w-full md:w-16 bg-gray-800 text-white flex md:flex-col items-center md:h-full py-2 md:py-4">
      <button onClick={() => router.push("/")} className="flex flex-col items-center p-2">
        <HomeIcon className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </button>

      <button onClick={() => setProfileOpen(!isProfileOpen)} className="flex flex-col items-center p-2">
        <UserIcon className="w-6 h-6" />
        <span className="text-xs">Profile</span>
      </button>

      {isProfileOpen && (
        <div className="flex md:flex-col bg-gray-700 text-white w-full md:w-auto mt-2">
          <button className="p-2 text-xs" onClick={() => router.push("/overview/edit")}>Overview</button>
          <button className="p-2 text-xs" onClick={() => router.push("/profile/edit")}>Profile</button>
          <button className="p-2 text-xs" onClick={() => router.push("/resumeCV/edit")}>Resume/CV</button>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;