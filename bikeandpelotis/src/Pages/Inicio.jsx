import Logo from '../Components/Logo'
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import logo_Asedio from '../assets/Logo-Asedio-twoLines.svg'
import { CountDownTimer } from '../Components/CountDownTimer';

const Inicio = () => {
    // const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/asedio')
    //     }, 8000)
    // }, [])

    return (
        <div className='container-inicio'>
            <div className='container-info-inicio'>
                <CountDownTimer targetDate={'2023-09-17'} />
                <Logo className='logo-asedio' src={logo_Asedio} />
            </div>
        </div>
    )
}
export default Inicio