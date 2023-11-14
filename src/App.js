import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Main } from "./pages/MainPage/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
