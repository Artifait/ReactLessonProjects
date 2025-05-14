export default function ControlPanel({ setMode }) {
  return (
    <div className="control-panel">
      <button onClick={() => setMode('normal')}>Нормальная загрузка</button>
      <button onClick={() => setMode('slow')}>Режим загрузки</button>
      <button onClick={() => setMode('error')}>Симулировать ошибку</button>
    </div>
  );
}
