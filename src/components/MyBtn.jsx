
export default function MyBtn({ isEnable, funcOnClick, label }) {
  return <button onClick={funcOnClick}>
    {label}
  </button>
}