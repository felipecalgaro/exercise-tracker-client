import { Plus } from "phosphor-react";

interface SuccessButtonProps {
  text: string
  handleClick: () => void
}

export function SuccessButton({ text, handleClick }: SuccessButtonProps) {
  return (
    <button
      className="text-white bg-light-green px-4 mt-6 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-green active:scale-95 transition-all duration-300"
      onClick={handleClick}
    >
      <Plus size={20} weight='bold' />
      {text}
    </button>
  )
}