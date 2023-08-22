import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from '../Logo'
import dateRace from '../assets/17S.svg'
import './Inicio.css'

const Inicio = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/inscribete')
        }, 10000)
    }, [])

    const heart = new Audio(
        'https://upload.wikimedia.org/wikipedia/commons/1/1b/57_BPM_Heart_Sounds.ogg'
        )

    return (
        // <div className='container'>
        //     <Link to='/inscribete' className='container'>
        //         <Logo className='dateRace' src={dateRace} width={300} />
        //     </Link>
        // </div>
        <div className='container'>
            <Logo className='dateRace' src={dateRace} width={300} />
        </div>
    )
}
export default Inicio