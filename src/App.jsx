import { useState } from 'react'
import './App.css'
import CoffeCards from './components/CoffeCards'
import ControlPanel from "./components/ControlPanel"

function App() {
  const [mode, setMode] = useState('normal');


  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <ControlPanel setMode={setMode} />
      <hr />
      <CoffeCards mode={mode} />
    </>

  )
}

export default App
