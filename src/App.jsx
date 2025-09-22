import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hi from './components/Hi'
import Hello from './components/Hello'
import Primeur from './components/Primeur'
import Calculette from './components/Calculette'
import Compteur from './components/Compteur'
import OnOff from './components/onOff'
import Clavier from './components/Clavier'
import { useState } from 'react'

function App() {

  const [country, setCountry] = useState('')
  function afficherPays(value){
    setCountry(value)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React en {country}</h1>
      <Hi nom="Wick"> Aix </Hi>
      <Hello nom="Dalton" sendData={afficherPays}> Marseille </Hello>
      <Primeur/>
      <Calculette/>
      <Compteur/>
      <OnOff/>
      <Clavier/>
    </>
  )
}

export default App
