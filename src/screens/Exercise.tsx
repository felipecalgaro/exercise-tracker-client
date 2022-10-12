import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseProps } from "../types/exercise";
import MacButtons from '../assets/mac-buttons.svg'
import { EditButton } from "../components/EditButton";
import { AddButton } from "../components/AddButton";
import { Chart } from "../components/Chart";

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
      <div className="min-h-screen md:py-0 py-10 flex justify-center items-center">
        <div className="bg-black-custom sm:w-3/4 w-11/12 h-auto flex flex-col justify-start items-center md:px-20 xs:px-10 px-5 py-12 rounded shadow-custom">
          {exercise ? (
            <>
              <img
                src={MacButtons}
                alt='mac buttons'
                className="h-5 self-start select-none"
                draggable="false"
              />
              <p className="font-roboto font-medium text-white text-2xl mt-4 mb-8">{exercise?.name}</p>
              <div className="flex justify-evenly items-center w-full mt-10">
                <Chart days={exercise!.days} />
              </div>
              <div className="flex sm:justify-end justify-center items-center w-full xs:px-10 px-0 py-4 mt-4">
                <div className="flex justify-center items-center gap-5 w-auto">
                  <EditButton handleClick={() => navigate(`days/edit`, { state: { exerciseName: exercise?.name } })} />
                  <AddButton handleClick={() => navigate(`days/new`, { state: { exerciseName: exercise?.name } })} />
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-white font-roboto mt-16 text-2xl">Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}