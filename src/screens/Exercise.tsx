import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseProps } from "../types/exercise";
import MacButtons from '../assets/mac-buttons.svg'
import { EditButton } from "../components/EditButton";
import { AddButton } from "../components/AddButton";

export function Exercise() {
  const { exerciseId } = useParams()
  const [exercise, setExercise] = useState<ExerciseProps | undefined>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3333/exercises/${exerciseId}`)
      setExercise(data)
    }

    fetchData()
  }, [])

  return (
    <div className="bg-purple-custom">
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black-custom w-3/4 h-2/3 flex flex-col justify-start items-center px-20 py-12 rounded shadow-custom">
          <img
            src={MacButtons}
            alt='mac buttons'
            className="h-5 self-start select-none"
            draggable="false"
          />
          <p className="font-roboto font-medium text-white text-2xl mt-4 mb-8">{exercise?.name}</p>
          <div className="flex justify-evenly items-center w-full mt-10">
            <div className="bg-red-900 h-80 w-96">
              Weight
            </div>
            <div className="bg-red-900 h-80 w-96">
              Repetitions
            </div>
          </div>
          <div className="flex justify-end items-center gap-5 w-full px-10 py-4 mt-4">
            <EditButton handleClick={() => navigate(`days/edit`, { state: { exerciseName: exercise?.name } })} />
            <AddButton handleClick={() => navigate(`days/new`, { state: { exerciseName: exercise?.name } })} />
          </div>
        </div>
      </div>
    </div>
  )
}