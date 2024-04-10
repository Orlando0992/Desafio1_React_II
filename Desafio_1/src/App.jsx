import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contacto, Inicio, NotFound } from './layouts'
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

