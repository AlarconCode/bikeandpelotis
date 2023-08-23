import logo_ByP from './assets/logo-bikeandpelotis.svg'
import menuIcon from './assets/Icono-menu-hamburguer-blanco.svg'

function Header() {
    return (
        <header className='bg-black border-b border-slate-600 p-4 w-screen flex justify-between shadow-slate-300'>
        
            <img className='w-1/2'src={logo_ByP} />
            <img className='w-10 hover:rotate-180 cursor-pointer mr-4' src={menuIcon} />
    
        </header>
    )
}

export default Header