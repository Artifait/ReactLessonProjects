
export default function MyBtn({setCount, number})
{
  return <button onClick={() => setCount(number)}>Установить {number}</button>
}