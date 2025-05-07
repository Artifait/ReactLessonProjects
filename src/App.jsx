import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import MyBtn from './components/MyBtn'
import MyCounter from './components/MyCounter'

const btnContents = [
  ['+1', (setCount, count) => true, (setCount, count) => setCount(count + 1)],
  ['-1', (setCount, count) => count > 0, (setCount, count) => setCount(count - 1)],
  ['Сбросить', (setCount, count) => count != 0, (setCount, count) => setCount(0)],
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
        pair[1](setCount, count) &&
        <MyBtn
          key={uuidv4()}
          label={pair[0]}
          funcOnClick={() => pair[2](setCount, count)}
        />
      ))}
    </>
  )
}

export default App
