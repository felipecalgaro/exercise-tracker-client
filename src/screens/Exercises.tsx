import axios from "axios";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExerciseCard } from "../components/ExerciseCard";
import { Navbar } from "../components/Navbar";
import { AddButton } from "../components/AddButton";
import { ExerciseProps } from "../types/exercise";


export function Exercises() {
  const [exercises, setExercises] = useState<ExerciseProps[] | undefined>(undefined)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [exerciseNameInputValue, setExerciseNameInputValue] = useState<string>('')

  const navigate = useNavigate()

  async function handleRemove(id: string) {
    const { data } = await axios.delete(`http://localhost:3333/exercises/${id}`)
    setExercises(data)
  }

  function handleClick() {
    navigate('/exercises/new')
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://localhost:3333/exercises')
      setExercises(data)
    }

    fetchData()
  }, [])

  return (
    <div className="h-screen">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {
        exercises ? (
          <div className="bg-purple-custom w-full min-h-[calc(100%-4rem)] py-6 flex justify-center items-start relative">
            <div className="flex justify-evenly items-center flex-wrap gap-32 py-16 xs:px-12 px-0">
              {isSidebarOpen && (
                <div className="sm:w-96 w-full bg-black-custom text-white h-full absolute animate-slide left-0 top-0 transition-all flex flex-col justify-start items-center py-10 gap-8">
                  <div className="rounded placeholder:text-gray-600 placeholder:font-roboto bg-[#161616] xs:px-5 px-0 py-2 mb-16 flex justify-center items-center gap-3">
                    <label htmlFor="name"><MagnifyingGlass size={20} /></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Search..."
                      className="bg-transparent outline-none xs:w-auto w-2/3"
                      value={exerciseNameInputValue}
                      onChange={(e) => setExerciseNameInputValue(e.target.value)}
                      autoComplete='off'
                    />
                  </div>

                  {exercises.length > 0 ?
                    exercises
                      .filter(exercise => exercise.name.toLowerCase().slice(0, exerciseNameInputValue.length).includes(exerciseNameInputValue.toLowerCase())) // filter first character(s), and not if just includes the string
                      .map(exercise => (
                        <div className="flex justify-center items-center w-full gap-8">
                          <Link
                            to={exercise.id}
                            className="rounded w-2/3 bg-[#161616] flex justify-between items-center xs:px-10 px-5 py-2 overflow-x-auto cursor-pointer hover:bg-[#161616]/70 active:scale-95 transition-all duration-200 select-none"
                          >
                            <p className="text-lg">{exercise.name}</p>
                            <ArrowRight size={24} />
                          </Link>
                        </div>
                      )) : (
                      <div className="text-zinc-500">No exercises found.</div>
                    )}

                  <AddButton handleClick={handleClick} />
                </div>
              )}
              {exercises.map(exercise => (
                <ExerciseCard
                  key={exercise.id}
                  id={exercise.id}
                  days={exercise.days}
                  name={exercise.name}
                  handleRemove={handleRemove}
                />
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