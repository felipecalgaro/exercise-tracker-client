import { useParams } from "react-router-dom";

export function AddDay() {
  const { exerciseName } = useParams()

  return (
    <div>{exerciseName}</div>
  )
}