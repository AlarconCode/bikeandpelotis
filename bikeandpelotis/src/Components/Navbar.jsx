import NavBarContainer from './NavBarContainer'
import Logo from './Logo'
import { useState } from 'react'
import logo_ByP from '../assets/logo-bikeandpelotis.svg'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'


const Navbar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false)
    
    const toggle = () => setIsOpen(!isOpen)
    // function handleMenu(){
    //     setIsOpen(!isOpen)
    // }

    return (
        <NavBarContainer {...props}>
            <Logo 
            src={logo_ByP} 
            w='100px'        
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    )

}

export default Navbar