import { TrashSimple } from "phosphor-react";

interface DangerButtonProps {
  handleRemove: (id: string) => void
  id: string
}

export function DangerButton({ handleRemove, id }: DangerButtonProps) {
  return (
    <button
      className="text-white bg-light-red px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-red transition-colors duration-300"
      onClick={() => handleRemove(id)}
    >
      <TrashSimple size={20} weight='bold' />
      Remove
    </button>
  )
}