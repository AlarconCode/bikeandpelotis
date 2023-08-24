import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Header from './Components/Header'
import Asedio from './Pages/Asedio'
import FourMiles from './Pages/CuatroMillas'

import './App.css'



function App() {

  return (
    <>
      <Header />
     <div className='container-margin-top-header'>
       <Routes>
        <Route path='/' element={ <Inicio /> }></Route>
        <Route path='/asedio' element={ <Asedio /> }></Route>
        <Route path='/4millas' element={ <FourMiles /> }></Route>
      </Routes>
     </div>
    </>
  )
}

export default App
