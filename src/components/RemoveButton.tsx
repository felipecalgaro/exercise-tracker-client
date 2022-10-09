import { TrashSimple } from "phosphor-react";
import { HandleRemove } from "../types/handleRemove";

interface RemoveButtonProps {
  handleRemove: HandleRemove
  exerciseId: string
  dayId?: string
}

export function RemoveButton({ handleRemove, exerciseId, dayId }: RemoveButtonProps) {
  return (
    <button
      className="text-white bg-light-red px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-red transition-colors duration-300"
      onClick={dayId ? () => handleRemove(exerciseId, dayId) : () => handleRemove(exerciseId)}
    >
      <TrashSimple size={20} weight='bold' />
      Remove
    </button>
  )
}