
export default function MyBtn({ funcOnClick, label }) {
  return <button onClick={() => funcOnClick()}>
    {label}
  </button>
}