import Logo from '../Components/Logo'
import Patrocinadores from '../Components/Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import dateRace from '../assets/17S.svg'
import './Inicio.css'
import { CountDownTimer } from '../Components/CountDownTimer'

const Asedio = () => {
    return (
        <div className="container-asedio">
            <div className='container-info-asedio'>
                <CountDownTimer targetDate={'2023-09-17'} />
                <div>
                  <Logo className='logo-asedio' src={logo_Asedio} />
                  <Logo className='dateRace' src={dateRace} width={300} />
                </div>
                <Logo className='logo-ayto' src={logo_Ayto} />
                <Patrocinadores />
            </div>
        </div>
    )
}

export default Asedio