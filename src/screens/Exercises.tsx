import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { Navbar } from "../components/Navbar";
import { ExerciseProps } from "../types/exercise";

export default function Exercises() {
  const [exercises, setExercises] = useState<ExerciseProps[] | undefined>(undefined)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [exerciseNameInputValue, setExerciseNameInputValue] = useState<string>('')

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
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {
        exercises ? (
          <div className="bg-purple-custom w-full min-h-[calc(100%-4rem)] py-6 flex justify-center items-start">
            <div className="flex justify-evenly items-center flex-wrap gap-32 py-16 px-96">
              {isSidebarOpen && (
                <div className="w-1/5 bg-black-custom text-white h-[calc(100%-4rem)] absolute animate-slide left-0 transition-all top-16 flex flex-col justify-start items-center py-10 gap-8">
                  <div className="rounded placeholder:text-gray-600 placeholder:font-roboto bg-[#161616] px-5 py-2 mb-16 flex justify-center items-center gap-3">
                    <label htmlFor="name"><MagnifyingGlass size={20} /></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Search..."
                      className="bg-transparent outline-none"
                      value={exerciseNameInputValue}
                      onChange={(e) => setExerciseNameInputValue(e.target.value)}
                      autoComplete='off'
                    />
                  </div>

                  {exercises
                    .filter(exercise => exercise.name.toLowerCase().slice(0, exerciseNameInputValue.length).includes(exerciseNameInputValue.toLowerCase())) // filter first character(s), and not if just includes the string
                    .map(exercise => (
                      <div className="flex justify-center items-center w-full gap-8">
                        <div className="rounded w-2/3 bg-[#161616] flex justify-between items-center px-10 py-2 overflow-x-auto cursor-pointer hover:bg-[#161616]/70 active:scale-95 transition-all duration-200 select-none ">
                          <p className="text-lg">{exercise.name}</p>
                          <ArrowRight size={24} />
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {exercises.map(exercise => (
                <>
                  <ExerciseCard days={exercise.days} name={exercise.name} />
                </>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-black font-roboto mt-16 text-2xl">Loading...</p>
        )
      }
    </div>
  )
}