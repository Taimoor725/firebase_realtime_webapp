import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-screen h-auto py-1 flex items-center justify-between px-6 z-10 font-semibold fixed top-0 left-0 text-black">

      <div className="text-white text-2xl font-bold">
        <Image src={"/logo/uet-lahore-seeklogo.svg"} height={600} width={600} className="w-24 h-24" alt="uet-logo" />
      </div>

      <div className="flex gap-4 pr-6 text-lg">
        <a href="#home" className="rounded-md"> Abstract </a>
        <a href="#about" className="rounded-md"> Readings </a>
        <a href="#services" className="rounded-md"> Graphs </a>
        <a href="#contact" className="rounded-md"> Members </a>
      </div>
    </div>
  );
}
