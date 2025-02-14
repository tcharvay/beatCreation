import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppBtn/WhatsAppBtn'

function App() {

  return (

      <div>
        < NavBar />
        < Home />
        < WhatsAppButton phoneNumber="+5491167688469" />
        < Footer />
      </div>

  )
}

export default App
