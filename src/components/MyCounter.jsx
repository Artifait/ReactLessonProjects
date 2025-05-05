import {useState} from "react" 
import getRandomInt from "../utils/getRandomInt";

export default function MyCounter()
{
  const [count, setCount] = useState(0);
  return <>
    <h1>{count}</h1>
    <button onClick={() => setCount(getRandomInt(0, 6))}>Click me</button>
  </>
}

//==========================================================

// import {useState} from "react" 

// export default function MyCounter()
// {
//   const [count, setCount] = useState(0);


//   return <>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//   </>
// }