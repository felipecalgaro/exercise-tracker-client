import Logo from '../assets/Logo.svg'

interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (arg: boolean) => void
}

export function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  return (
    <div className="bg-black-custom flex justify-between items-center w-full h-16 p-6">
      <div className="flex justify-start items-center gap-2 p-2 flex-wrap w-16 hover:cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <span className="bg-white h-1 w-10 rounded-sm"></span>
        <span className={`bg-white h-1 ${isSidebarOpen ? 'w-5' : 'w-10'} transition-all duration-300 rounded-sm`}></span>
        <span className="bg-white h-1 w-10 rounded-sm"></span>
      </div>
      <img src={Logo} alt='logo' className="h-10" />
    </div>
  )
}