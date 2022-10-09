import { Pen, PencilSimple } from "phosphor-react";
import { NavigationButtonProps } from "../types/navigationButton";

export function EditButton({ handleClick }: NavigationButtonProps) {
  return (
    <button
      className="text-white bg-light-yellow px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-yellow active:scale-95 transition-all duration-300 self-end"
      onClick={handleClick}
    >
      <PencilSimple size={22} weight='bold' />
      Edit
    </button>
  )
}