import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormularioRegistro from './components/FormularioRegistro'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormularioRegistro />
      </div>
    </>
  )
}

export default App
