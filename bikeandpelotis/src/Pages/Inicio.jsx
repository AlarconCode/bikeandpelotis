import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Logo from '../Components/Logo'
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'

const Inicio = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/asedio')
    //     }, 8000)
    // }, [])

    return (
        <div className='container-inicio'>
            <div className='container-info-inicio'>
                <Logo className='logo-asedio' src={logo_Asedio} />
                <a 
                    className='inscribete'
                    href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/modalidades'
                    target ='_blank'
                >
                    ¡Inscribete Aquí!
                </a>
                <div>
                <h1>Síguenos en</h1>
                <a href='https://www.facebook.com/Bikepelotis' target='_blank'><p><FaFacebook /> Bike&Pelotis</p></a>
                <a href='https://www.instagram.com/bike_and_pelotis/' target='_blank'><p><FaInstagram /> bike_and_pelotis</p></a>
                </div>
            </div>
        </div>
    )
}
export default Inicio