export default function Instructions({ steps }) {
  return (
    <div className="instructions">
      <h2>Пошаговое приготовление:</h2>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
