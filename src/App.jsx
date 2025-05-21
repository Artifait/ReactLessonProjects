import { useState } from 'react'
import './App.css'
import Btn from './components/Btn'

function App() {
  const [key, setKey] = useState("Press Key");
  const onKey = () => {

  }
  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <Btn text="dadsfs" onClick={() => console.log("DFSDF")} />
    </>
  )
}

export default App
