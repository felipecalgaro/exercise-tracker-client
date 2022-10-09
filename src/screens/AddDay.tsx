import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import MacButtons from '../assets/mac-buttons.svg'
import { FormEvent, useState } from "react";
import { formatDateFromForm } from "../utils/formatDate";
import axios from "axios";

export function AddDay() {
  const { state } = useLocation()
  const { exerciseId } = useParams()
  const [errorOnSubmit, setErrorOnSubmit] = useState<boolean>(false)
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    try {
      await axios.post(`http://localhost:3333/days/${exerciseId}`, {
        weight: Number(data.weight),
        repetitions: Number(data.repetitions),
        date: formatDateFromForm(data.day as string, data.month as string, data.year as string)
      })

      setErrorOnSubmit(false)
      navigate(`/exercises/${exerciseId}`)
    } catch (err) {
      setErrorOnSubmit(true)
    }
  }

  return (
    <div className="bg-purple-custom">
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black-custom w-3/4 h-2/3 flex flex-col justify-start items-center px-16 py-12 rounded shadow-custom">
          <img
            src={MacButtons}
            alt='mac buttons'
            className="h-6 self-start select-none"
            draggable="false"
          />
          <p className="font-roboto font-medium text-white text-2xl my-8">Add Day</p>
          <form
            className="flex flex-col justify-start items-center h-full gap-12 pt-12 mt-8"
            action=""
            spellCheck="false"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center gap-20 mb-6">
              <div className="pt-3">
                <p className="font-light text-2xl text-white">{state.exerciseName}</p>
              </div>
              <div className="flex justify-center items-center gap-10">
                <Input inputId="month" label="Month" type="number" />
                <Input inputId="day" label="Day" type="number" />
                <Input inputId="year" label="Year" type="number" width='w-20' />
              </div>
              <div className="flex justify-center items-center gap-10">
                <Input inputId="weight" label="Weight" type="number" />
                <Input inputId="repetitions" label="Reps" type="number" />
              </div>
            </div>
            <SubmitButton />
            <div>
              <h1 className={`text-light-red ${errorOnSubmit ? 'visible' : 'hidden'}`}>Error while adding exercise. Please check the informations given.</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}