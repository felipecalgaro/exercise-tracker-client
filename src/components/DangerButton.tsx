import { TrashSimple } from "phosphor-react";

export function DangerButton() {
  return (
    <button className="text-white bg-light-red px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-red transition-colors duration-300">
      <TrashSimple size={20} weight='bold' />
      Remove
    </button>
  )
}