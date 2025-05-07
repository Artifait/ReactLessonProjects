import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MyBtn from './components/MyBtn'
import MyCounter from './components/MyCounter'

const btnContents = [
  ['Установить 3', (setCount, count) => setCount(3)],
  ['+1', (setCount, count) => setCount(count + 1)]
]

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Крутое WEB приложение</h1>
      <hr />
      <MyCounter count={count} />
      <hr />
      {btnContents.map((pair) => (
        <MyBtn
          key={uuidv4()}
          label={pair[0]}
          funcOnClick={() => pair[1](setCount, count)}
        />
      ))}
    </>
  )
}

export default App
