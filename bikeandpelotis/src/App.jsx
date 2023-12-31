import { Routes, Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Asedio from './Pages/Asedio'
import FourMiles from './Pages/CuatroMillas'
import { ScrollProvider } from './Providers/ScrollProvider'
import { HeaderProvider } from './Providers/HeaderProvider'
import './App.css'



function App() {

  return (
    <>
      <ScrollProvider>
        <HeaderProvider>
          <Header />
           <Routes>
            <Route path='/' element={ <Asedio /> }></Route>
            <Route path='/asedio' element={ <Asedio /> }></Route>
            <Route path='/4millas' element={ <FourMiles /> }></Route>
          </Routes>
          <Footer />
        </HeaderProvider>
      </ScrollProvider>
    </>
  )
}

export default App
