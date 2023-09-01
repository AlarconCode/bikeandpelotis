import { useState, useEffect } from 'react'
import logo_ByP from '../assets/logo-bikeandpelotis.svg'
import './header.css'
import { MdClose, MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useHeaderContext } from '../Providers/HeaderProvider'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const toggleFalse = () => setIsOpen(false)
    const iconMenu = isOpen ? <MdClose className='icon-menu-header'/> : <MdMenu className='icon-menu-header'/>
    const {isVisible} = useHeaderContext()
    console.log(isVisible);
    useEffect(() => {
        const div = document.getElementById('menu-movil-container')
        div.style.width = isOpen || screen.width > 992  ? `100vw` : '0'
    },[isOpen])

    return (
        <header style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.5s ease-in-out'
            }}>
            <Link to='/'><img className='logo-ByP-header' src={logo_ByP}/></Link>                     
            <div className='icon-menu-header-container' onClick={handleToggle}>{iconMenu}</div>
            <div className='menu-items-container' id='menu-movil-container'>
                <ul className='list-items'>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/'>Inicio</Link></li>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/asedio'>Asedio&apos;23</Link></li>
                    <li className='menu-item'onClick={toggleFalse}><Link to='/4millas'>4Millas&apos;23</Link></li>
                </ul> 
            </div>
        </header>
    )
}

export default Header