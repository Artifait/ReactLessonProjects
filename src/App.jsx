import { useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <hr />
      <Wrapper fonColor="coral">
        <h1>Lorem, ipsum.</h1>
        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</a>
      </Wrapper>

      <Wrapper fonColor="lightgreen">
        <h1>Lorem, ipsum.</h1>
        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</a>
      </Wrapper>

      <Wrapper fonColor="">
        <h1>Lorem, ipsum.</h1>
        <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</a>
      </Wrapper>
    </>
  )
}

export default App
