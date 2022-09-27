import { Plus } from "phosphor-react";

export function SuccessButton({ text }: { text: string }) {
  return (
    <button className="text-white bg-light-green px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-green transition-colors duration-300">
      <Plus size={20} weight='bold' />
      {text}
    </button>
  )
}