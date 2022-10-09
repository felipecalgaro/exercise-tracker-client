import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseProps } from "../types/exercise";
import MacButtons from '../assets/mac-buttons.svg'
import { AddButton } from "../components/AddButton";
import { formatDateFromDatabase } from "../utils/formatDate";
import { RemoveButton } from "../components/RemoveButton";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { HandleRemove } from "../types/handleRemove";

export function EditDay() {
  const { exerciseId } = useParams()
  const [exercise, setExercise] = useState<ExerciseProps | undefined>(undefined)
  const navigate = useNavigate()

  async function handleRemove(exerciseId: string, dayId: string) {
    const { data } = await axios.delete(`http://localhost:3333/days/${exerciseId}/${dayId}`)
    setExercise(data)
  }

  async function handleEdit(e: FormEvent, dayId: string) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    await axios.put(`http://localhost:3333/days/${dayId}`, {
      weight: Number(data.weight),
      repetitions: Number(data.repetitions)
    })

    navigate(`/exercises/${exercise?.id}`)
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3333/exercises/${exerciseId}`)
      setExercise(data)
    }

    fetchData()
  }, [])

  return (
    <div className="bg-purple-custom">
      <div className="h-full min-h-screen flex justify-center items-center py-12">
        <div className="bg-black-custom w-3/4 h-auto overflow-y-auto flex flex-col justify-start items-center px-20 pt-12 pb-24">
          <img
            src={MacButtons}
            alt='mac buttons'
            className="h-5 self-start select-none"
            draggable="false"
          />
          <p className="font-roboto font-medium text-white text-2xl mt-4 mb-8">{exercise?.name}</p>
          <div className="flex flex-col justify-start items-center h-full w-full pt-8 gap-8">
            {exercise?.days.map(day => (
              <form
                className="flex justify-center items-center bg-zinc-900 rounded px-20 w-4/5 h-20 gap-x-24"
                onSubmit={(e) => handleEdit(e, day.id)}
              >
                <div className="flex justify-center items-center gap-8">
                  <p className="text-white font-light text-2xl font-roboto">{formatDateFromDatabase(day.date)}</p>
                  <RemoveButton dayId={day.id} exerciseId={exercise.id} handleRemove={handleRemove as HandleRemove} />
                </div>
                <div className="flex justify-center items-center gap-6">
                  <Input inputId="weight" label="Weight" type="number" width="w-18" required={false} />
                  <Input inputId="repetitions" label="Reps" type="number" width="w-18" required={false} />
                </div>
                <SubmitButton />
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}