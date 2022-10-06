import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddExercise } from "./screens/AddExercise"
import { Exercise } from "./screens/Exercise"
import Exercises from "./screens/Exercises"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/new" element={<AddExercise />} />
        <Route path="/exercises/*" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
