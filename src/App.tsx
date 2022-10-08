import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddDay } from "./screens/AddDay"
import { AddExercise } from "./screens/AddExercise"
import { Exercise } from "./screens/Exercise"
import Exercises from "./screens/Exercises"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/new" element={<AddExercise />} />
        <Route path="/exercises/:exerciseName" element={<Exercise />} />
        <Route path="/exercises/:exerciseName/days/new" element={<AddDay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
