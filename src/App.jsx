import { useState } from 'react'
import './App.css'
import Test from './components/Test'
import NewText from './components/NewText'

function App() {
  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <Test />
      <button className='active'>My button</button>
      <NewText />
    </>
  )
}

export default App
