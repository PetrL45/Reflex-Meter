import { StrictMode } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ReactionTimePage from './pages/ReactionTimePage'
import AimTrainer from './pages/AimTrainer'

function App() {
  return (
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<HomePage />} />
                <Route path='/test/ReactionTime' element={<ReactionTimePage />}/>
                <Route path='/training/Aim' element={<AimTrainer />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
  )
}

export default App
