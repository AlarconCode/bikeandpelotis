import Logo from '../Components/Logo'
import Patrocinadores from '../Components/Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import logo_Asedio_oneLine from '../assets/Logo-Asedio-oneLine.svg'
import dateRace from '../assets/17S.svg'
import ReactPlayer from 'react-player'
import audioHeart from '../assets/heart-beat.mp3'
import './Inicio.css'

// const logo_Asedio = screen.width > 992 ? logo_Asedio_oneLine : logo_Asedio_twoLines;

const Asedio = () => {
    return (
        <div className="container-asedio">
            <div className='container-info-asedio'>
                <Logo className='logo-ayto' src={logo_Ayto} />
                <Logo className='logo-asedio' src={logo_Asedio} />
                <Logo className='dateRace' src={dateRace} width={300} />
                <Patrocinadores />
            </div>
            <div className='noMostrar'>
                <ReactPlayer 
                    url={audioHeart}
                    playing={true}
                    volume={0.6}
                />
            </div>
        </div>
    )
}

export default Asedio