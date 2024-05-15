import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<div>About</div>} />
        <Route path='/contact' element={<div>Contact</div>} />
      </Routes>
    </>
  )
}

export default App;