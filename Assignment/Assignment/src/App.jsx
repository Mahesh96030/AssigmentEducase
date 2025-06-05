import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { LoginPage } from './components/LoginPage'
import { SignUp } from './components/SignUp'
import { MainPage } from './components/MainPage'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/main" element={<MainPage />}/>
      </Routes>
    </>
  )
}

export default App
