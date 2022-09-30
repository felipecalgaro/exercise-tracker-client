import { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { Navbar } from "../components/Navbar";
import { ExerciseProps } from "../types/exercise";

export default function Exercises() {
  const [exercises, setExercises] = useState<ExerciseProps[] | undefined>(undefined)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3333/exercises')
      const data = await res.json()
      setExercises(data)
    }

    fetchData()
  }, [])

  return (
    <div className="h-screen">
      <Navbar />
      {
        exercises ? (
          <div className="bg-purple-custom w-full min-h-[calc(100%-4rem)] py-6 flex justify-center items-start">
            <div className="flex justify-evenly items-center flex-wrap gap-16 py-16 w-3/4">
              <ExerciseCard days={exercises[exercises.length - 1].days} name={exercises[exercises.length - 1].name} />
              <ExerciseCard days={exercises[exercises.length - 1].days} name={exercises[exercises.length - 1].name} />
              <ExerciseCard days={exercises[exercises.length - 1].days} name={exercises[exercises.length - 1].name} />
              <ExerciseCard days={exercises[exercises.length - 1].days} name={exercises[exercises.length - 1].name} />
            </div>
          </div>
        ) : (
          <p className="text-center text-black font-roboto mt-16 text-2xl">Loading...</p>
        )
      }
    </div>
  )
}