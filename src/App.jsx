import { Route, Routes } from "react-router-dom"
import { Landing, SinglePage } from "./pages"
import "./App.css"

export const App = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = ":id" element = {<SinglePage />} />
    </Routes>
  )
}
