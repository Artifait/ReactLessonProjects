import { useState } from 'react'
import './App.css'
import MyBtn from './components/MyBtn'
import MyCounter from './components/MyCounter'

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <hr/>
      <MyCounter count = {count}/>
      <hr/>
      <MyBtn setCount={setCount} number={12}/>
      <MyBtn setCount={setCount} number={15}/>
      <MyBtn setCount={setCount} number={18}/>
    </>
  )
}

export default App
