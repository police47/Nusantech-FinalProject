import Home from "./userPages/Home"
import { Routes , BrowserRouter , Route } from "react-router-dom"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/home" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App
