import './App.css'

import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppBtn/WhatsAppBtn'


function App() {
  return (
    <BrowserRouter>
        < NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Bio' element={<Bio />} />
          
        </Routes>
        < WhatsAppButton phoneNumber="+5491167688469" />
        < Footer />
    </BrowserRouter>
  )
}

export default App
