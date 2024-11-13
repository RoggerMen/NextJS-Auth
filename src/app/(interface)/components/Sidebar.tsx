'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HomeIcon, UserIcon } from "lucide-react"; // Asegúrate de tener lucide-react instalado


const Sidebar = () => {
  const router = useRouter();
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-4 md:flex-col md:h-screen md:w-20 md:top-0">
      <button onClick={() => router.push("/overview/edit")} className="flex flex-col items-center hover:text-blue-500">
        <HomeIcon className="w-6 h-6" />
        <span className="text-ms">Home</span>
      </button>

      <button onClick={() => setProfileOpen(!isProfileOpen)} className="flex flex-col items-center hover:text-blue-500">
        <UserIcon className="w-6 h-6" />
        <span className="text-ms">Profile</span>
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