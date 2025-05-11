export default function Ingredients({ list }) {
  return (
    <div className="ingredients">
      <h2>Ингредиенты:</h2>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item.name} — {item.amount}</li>
        ))}
      </ul>
    </div>
  );
}
