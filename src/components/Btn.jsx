export default function Btn({ funcOnClick, label }) {
  return (
    <button className="btn" onClick={funcOnClick}>
      {label}
    </button>
  );
}
