import { useState } from 'react'
import logo_ByP from '../assets/logo-bikeandpelotis.svg'
import './header.css'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const toggleFalse = () => setIsOpen(false)
    const iconMenu = isOpen ? <MdClose className='icon-menu-header'/> : <MdMenu className='icon-menu-header'/>
    const width = isOpen || screen.width > 992 ? 100 : 0

    return (
        <header>
            <Link to='/' onClick={toggleFalse}><img className='logo-ByP-header' src={logo_ByP} /></Link>            
            <div className='icon-menu-header-container' onClick={handleToggle}>{iconMenu}</div>
            <div className='menu-items-container' style={{width: `${width}vw`}}>
                <ul className='list-items'>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/'>Inicio</Link></li>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/asedio'>Asedio'23</Link></li>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/4millas'>4Millas'23</Link></li>
                </ul> 
            </div>
        </header>
    )
}

export default Header