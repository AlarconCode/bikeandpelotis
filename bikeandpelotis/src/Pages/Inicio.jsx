import Logo from '../Components/Logo'
import Patrocinadores from '../Components/Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import dateRace from '../assets/17S.svg'
import './Inicio.css'
import { CountDownTimer } from '../Components/CountDownTimer'

const Inicio = () => {

    return (
        <div className="image-background">
        <div className='container-info'>
            <Logo className='logo-ayto' src={logo_Ayto} />
            <Logo className='logo-asedio' src={logo_Asedio} />
            <CountDownTimer targetDate={'2023-09-17'} />
            <Logo className='dateRace' src={dateRace} width={300} />
        </div>
        <Patrocinadores />
        </div>
    )
}
export default Inicio