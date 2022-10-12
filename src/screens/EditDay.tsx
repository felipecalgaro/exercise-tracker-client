import axios from "axios";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseProps } from "../types/exercise";
import MacButtons from '../assets/mac-buttons.svg'
import { formatDateFromDatabase } from "../utils/formatDate";
import { RemoveButton } from "../components/RemoveButton";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { HandleRemove } from "../types/handleRemove";

export function EditDay() {
  const { exerciseId } = useParams()
  const [exercise, setExercise] = useState<ExerciseProps | undefined>(undefined)
  const navigate = useNavigate()

  async function handleRemove(exerciseId: string, e: MouseEvent, dayId: string) {
    if (exercise!.days.length > 1) {
      const { data } = await axios.delete(`http://localhost:3333/days/${exerciseId}/${dayId}`)
      setExercise(data)
    } else {
      await axios.delete(`http://localhost:3333/exercises/${exerciseId}`)
      navigate('/exercises')
    }
  }

  async function handleEdit(e: FormEvent, dayId: string) {
    console.log('a');
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
        <div className="bg-black-custom xl:w-2/3 sm:4/5 w-5/6 h-auto overflow-y-auto flex flex-col justify-start items-center 2xl:px-20 lg:px-8 xs:px-16 px-8 pt-12 pb-24 shadow-custom rounded">
          <img
            src={MacButtons}
            alt='mac buttons'
            className="xs:h-5 h-4 self-start select-none"
            draggable="false"
          />
          <p className="font-roboto font-medium text-white text-2xl mt-6 mb-8">{exercise?.name}</p>
          <div className="flex flex-col justify-start items-center h-full 2xl:w-4/5 w-full pt-8 gap-8">
            {exercise?.days.map(day => (
              <form
                className="flex flex-wrap justify-center items-center bg-zinc-900 rounded lg:w-full md:w-1/2 w-full h-auto xl:gap-x-24 gap-x-16 gap-y-10 py-4"
                onSubmit={(e) => handleEdit(e, day.id)}
                key={day.id}
              >
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
                  <p className="text-white font-light text-2xl font-roboto">{formatDateFromDatabase(day.date)}</p>
                  <RemoveButton
                    dayId={day.id}
                    exerciseId={exercise.id}
                    handleRemove={handleRemove as HandleRemove}
                  />
                </div>
                <div className="flex justify-center items-center gap-6 lg:w-auto w-full">
                  <Input
                    inputId="repetitions"
                    label="Reps"
                    type="number"
                    width="w-18"
                    required={false}
                  />
                  <Input
                    inputId="weight"
                    label="Weight"
                    type="number"
                    width="w-18"
                    required={false}
                  />
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