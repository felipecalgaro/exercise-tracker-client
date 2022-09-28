import { SuccessButton } from "./SuccessButton";
import Logo from '../assets/Logo.svg'
import { useState } from "react";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className="bg-black-custom flex justify-between items-center w-full h-16 p-6">
      <div className="flex justify-start items-center gap-2 p-2 flex-wrap w-16 hover:cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <span className="bg-white h-1 w-10 rounded-sm"></span>
        <span className={`bg-white h-1 ${isSidebarOpen ? 'w-5' : 'w-10'} transition-all duration-300 rounded-sm`}></span>
        <span className="bg-white h-1 w-10 rounded-sm"></span>
      </div>
      <img src={Logo} alt='logo' className="h-10" />
      <SuccessButton text="New" />
    </div>
  )
}