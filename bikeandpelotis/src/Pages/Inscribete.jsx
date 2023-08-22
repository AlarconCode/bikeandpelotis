import Logo from '../Logo'
import Patrocinadores from '../Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import { Button } from 'antd';

const Inscribete = () => {
    return (
        <div className="container">
            <Logo className='logo-ayto' src={logo_Ayto} />
            <Logo className='logo-asedio' src={logo_Asedio} />
            <Button
                className='inscribete'
                href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/modalidades'
                target='_blank'
                type='link'
            >
                Inscribete Aquí
            </Button>
            <Patrocinadores />
        </div>
    )
}

export default Inscribete