import Logo from '../Components/Logo'
import Patrocinadores from '../Components/Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import dateRace from '../assets/17S.svg'
import Hora_Ruta from '../assets/RutasKm-Horatio.svg'
import './Inicio.css'
import { CountDownTimer } from '../Components/CountDownTimer'
import camiseta from '../assets/img/camiseta-asedio-2023.jpg'
import Slider  from '../Components/Carousel/Slider'

const Asedio = () => {
    return (
        <>
            <div className="image-background">
                <div className='container-info-left'>
                    <Logo className='logo-ayto' src={logo_Ayto} />
                    <Logo className='logo-asedio' src={logo_Asedio} />
                    <CountDownTimer targetDate={'2023-09-17'} />
                </div>
                <div className='container-info-right'>
                    <Logo className='dateRace' src={dateRace} />
                    <img src={Hora_Ruta} alt=''/>
                </div>
            </div>
            <Slider />
        </>
    )
}

export default Asedio