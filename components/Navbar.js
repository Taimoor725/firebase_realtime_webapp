import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-screen top-0 h-20 bg-black flex items-center justify-between px-6 shadow-lg z-10 font-bold">
      {/* Logo Section */}
      <div className="text-white text-2xl font-bold">
        <Image src={"/logo/uet-lahore-seeklogo.svg"} height={600} width={600} className="w-24 h-24"/>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 pr-6">
        <a href="#home" className="text-white hover:text-#9BA8B8-200 text-2xl hover:bg-[#9BA8B8] p-2 rounded-md">
          Abstract
        </a>
        <a href="#about" className="text-white hover:text-#9BA8B8-200 text-2xl p-2 rounded-md hover:bg-[#9BA8B8]">
          Readings
        </a>
        <a href="#services" className="text-white hover:text-#9BA8B8-200 text-2xl p-2 rounded-md hover:bg-[#9BA8B8]">
          Graphs
        </a>
        <a href="#contact" className="text-white hover:text-#9BA8B8-200 text-2xl p-2 rounded-md hover:bg-[#9BA8B8]">
          Members
        </a>
      </div>
    </nav>
  );
}
