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
    <div>
      <Navbar />
      <div className="bg-purple-custom">
        {
          exercises ? (
            <ExerciseCard days={exercises[exercises.length - 1].days} name={exercises[exercises.length - 1].name} />
          ) : (
            <p>Loading</p>
          )
        }
      </div>
    </div>
  )
}