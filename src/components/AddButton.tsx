import { Plus } from "phosphor-react";

interface AddButtonProps {
  handleClick: () => void
}

export function AddButton({ handleClick }: AddButtonProps) {
  return (
    <button
      className="text-white bg-light-green px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-green active:scale-95 transition-all duration-300"
      onClick={handleClick}
    >
      <Plus size={20} weight='bold' />
      New
    </button>
  )
}