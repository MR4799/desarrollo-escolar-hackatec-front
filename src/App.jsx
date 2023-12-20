import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
