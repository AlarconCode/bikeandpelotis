import { Link } from 'react-router-dom'
import Logo from '../Logo'
import dateRace from '../assets/17S.svg'
import './Inicio.css'

const Inicio = () => {
    return (
        <div className='container'>
            <Link to='/inscribete'>
                <Logo className='dateRace' src={dateRace} width={300} />
            </Link>
        </div>
    )
}
export default Inicio