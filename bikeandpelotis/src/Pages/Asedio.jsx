import Logo from '../Components/Logo'
import Patrocinadores from '../Components/Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio_twoLines from '../assets/Logo-Asedio-twoLines.svg'
import logo_Asedio_oneLine from '../assets/Logo-Asedio-oneLine.svg'

const logo_Asedio = screen.width > 992 ? logo_Asedio_oneLine : logo_Asedio_twoLines;

const Asedio = () => {
    return (
        <div className="container-image">
            <div className='container-info'>
                <Logo className='logo-ayto' src={logo_Ayto} />
                <Logo className='logo-asedio' src={logo_Asedio} />
                <Patrocinadores />
            </div>
        </div>
    )
}

export default Asedio