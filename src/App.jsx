import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [info, setInfo] = useState("");
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((x) => x.json())
      .then((info) => setInfo(info));
  }, [])


  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <hr />
      {info && <h2>CAD - {info.rates.USD}</h2>}
    </>
  )
}

export default App
