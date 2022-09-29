import { ArrowRight } from "phosphor-react";
import { ExerciseProps } from "../types/exercise";
import { DangerButton } from "./DangerSuccess";

export function ExerciseCard({ name, days }: ExerciseProps) {
  return (
    <div className="bg-black-custom rounded text-white">
      <p>{name}</p>
      <p>{`${days[days.length - 1].weight} • ${days[days.length - 1].date}`}</p>
      <div className="flex justify-between items-center">
        <DangerButton />
        <ArrowRight />
      </div>
    </div>
  )
}