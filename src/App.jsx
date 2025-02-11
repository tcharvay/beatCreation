import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppBtn/WhatsAppBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < NavBar />
        < WhatsAppButton phoneNumber="+5491167688469" />
        < Footer />
      </div>
    </>
  )
}

export default App
