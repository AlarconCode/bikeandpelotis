import Logo from '../Logo'
import Patrocinadores from '../Patrocinadores'
import logo_Ayto from '../assets/Logo-AytoBarcience-blanco.svg'
import logo_Asedio_twoLines from '../assets/Logo-Asedio-twoLines.svg'
import logo_Asedio_oneLine from '../assets/Logo-Asedio-oneLine.svg'
import { Button } from 'antd';

const logo_Asedio = screen.width > 992 ? logo_Asedio_oneLine : logo_Asedio_twoLines;

const Inscribete = () => {
    return (
        <div className="container-image">
            <div className='container-info'>
                <Logo className='logo-ayto' src={logo_Ayto} />
                <Logo className='logo-asedio' src={logo_Asedio} />
                <Button
                    className='inscribete'
                    href='https://eventos.runrunsports.com/inscripcion/-vi-asedio-a-barcience/  modalidades'
                    target='_blank'
                    type='link'
                >
                    ¡Inscribete Aquí!
                </Button>
                <Patrocinadores />
            </div>
        </div>
    )
}

export default Inscribete