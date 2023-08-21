import { useState } from 'react'
import logo_ByP from './assets/logo-bikeandpelotis.svg'
import logo_Ayto from './assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from './assets/Logo-Asedio-twoLines.svg'
import dateRace from './assets/17S.svg'
import Patrocinadores from './Patrocinadores'
import { Button, Carousel } from 'antd';
import './App.css'
import Logo from './Logo'

function App() {

  return (
    <Carousel effect='fade'>
      <div className="container">
        <Logo className='logo-ayto' src={logo_Ayto} />
        <Logo className='logo-asedio' src={logo_Asedio} />
        <Patrocinadores />
      </div>
      <div className='container'>
        <Logo src={dateRace} width={300} />
      </div>
      <div className='container'>
        <Button
          className='inscribete'
          href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/modalidades'
          target='_blank'
          type='link'
        >
          Inscribete Aquí
        </Button>
      </div>
    </Carousel>
  )
}

export default App
