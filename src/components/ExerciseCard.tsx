import { ArrowRight } from "phosphor-react";
import { ExerciseProps } from "../types/exercise";
import { DangerButton } from "./RemoveButton";
import { formatDateFromDatabase } from "../utils/formatDate";

interface ExerciseCardProps extends ExerciseProps {
  handleRemove: (id: string) => void
}

export function ExerciseCard({ name, days, id, handleRemove }: ExerciseCardProps) {
  return (
    <div className="bg-black-custom/80 cursor-pointer hover:bg-black-custom/70 active:shadow-none active:bg-black-custom/60 active:scale-95 transition-all duration-200 font-roboto shadow-custom xs:w-60 w-full h-52 flex justify-center items-center flex-wrap px-8 py-2 rounded text-white">
      <p className="text-xl font-medium w-full text-center">{name}</p>
      <p className="font-light text-lg">{`${days[days.length - 1].weight}kg • ${formatDateFromDatabase(days[days.length - 1].date)}`}</p>
      <div className="flex justify-between items-center w-full">
        <DangerButton handleRemove={handleRemove} id={id} />
        <ArrowRight size={24} />
      </div>
    </div>
  )
}