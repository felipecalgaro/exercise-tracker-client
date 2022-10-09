import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddDay } from "./screens/AddDay"
import { AddExercise } from "./screens/AddExercise"
import { EditDay } from "./screens/EditDay"
import { Exercise } from "./screens/Exercise"
import Exercises from "./screens/Exercises"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/new" element={<AddExercise />} />
        <Route path="/exercises/:exerciseId" element={<Exercise />} />
        <Route path="/exercises/:exerciseId/days/new" element={<AddDay />} />
        <Route path="/exercises/:exerciseId/days/edit" element={<EditDay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
