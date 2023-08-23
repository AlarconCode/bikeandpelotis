import logo_bfw from '../assets/Logo-BlueForwarders-blanco.svg'
import logo_Navidul from '../assets/Logo-Navidul-Blanco.svg'
import logo_paint from '../assets/Logo-DHnnosSanchez-Blanco.svg'
import logo_boa from '../assets/Logo-BoaBike-Blanco.svg'
import logo_bell from '../assets/Logo-Bellissimo-Blanco.svg'
import logo_hp from '../assets/Logo-HPLogistica-Blanco.svg'
import './Patrocinadores.css'

function Patrocinadores() {
    return (
        <div className='patrocinadores-container'>
          <img src={logo_bfw} />
          <img src={logo_Navidul} />
          <img src={logo_boa} />
          <img src={logo_paint} />
          <img src={logo_bell} />
          <img src={logo_hp} />
        </div>
    )
}

export default Patrocinadores