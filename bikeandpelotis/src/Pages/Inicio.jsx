import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Logo from '../Components/Logo'
import dateRace from '../assets/17S.svg'
import ReactPlayer from 'react-player'
import audioHeart from '../assets/heart-beat.mp3'
import './Inicio.css'

const Inicio = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/asedio')
    //     }, 8000)
    // }, [])

    return (
        <div className='container-image'>
            <div className='container-info-center'>
                <Logo className='dateRace' src={dateRace} width={300} />
                <a 
                    className='inscribete'
                    href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/modalidades'
                    >
                    ¡Inscribete Aquí!
                </a>
                <div className='noMostrar'>
                <ReactPlayer 
                    url={audioHeart}
                    playing={true}
                    volume={0.6}
                />
                </div>
            </div>
        </div>
    )
}
export default Inicio