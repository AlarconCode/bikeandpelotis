import { useState } from 'react'
import logo_ByP from '../assets/logo-bikeandpelotis.svg'
import './header.css'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const iconMenu = isOpen ? <MdClose className='icon-menu-header'/> : <MdMenu className='icon-menu-header'/>
    const positionContainer = isOpen ? 0 : 100
    
    return (
        <header>
            <img className='logo-ByP-header' src={logo_ByP} />
            <div className='icon-menu-header-container' onClick={handleToggle}>{iconMenu}</div>
            <div className='menu-items-container' style={{left:`${positionContainer}vh`}}>
                <ul className='list-items'>
                    <li className='menu-item'onClick={handleToggle} ><Link to='/'>Inicio</Link></li>
                    <li className='menu-item'onClick={handleToggle}><Link to='/asedio'>Asedio'23</Link></li>
                    <li className='menu-item'onClick={handleToggle}><Link to='/4millas'>4Millas'23</Link></li>
                </ul> 
            </div>
        </header>
    )
}

export default Header