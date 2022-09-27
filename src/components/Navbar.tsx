import { SuccessButton } from "./SuccessButton";

export function Navbar() {
  return (
    <div className="bg-black-custom flex justify-between items-center w-full h-16 p-3">
      <div className="bg-white h-8 w-8"></div>
      <p className="font-roboto text-white">Logo</p>
      <SuccessButton text="New" />
    </div>
  )
}