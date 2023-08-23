import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Inscribete from './Pages/Inscribete'

import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Inicio /> } />
        <Route path='/inscribete' element={ <Inscribete /> } />
      </Routes>
    </>
  )
}

export default App
