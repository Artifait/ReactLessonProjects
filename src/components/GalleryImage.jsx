import Counter from "./Counter";
import Btn from "./Btn";

const btnContents = [
  ["+2", (count) => true, (count) => count + 2],
  ["+1", (count) => true, (count) => count + 1],
  ["Сбросить", (count) => count !== 0, (_) => 0],
  ["-1", (count) => true, (count) => count - 1],
  ["-2", (count) => true, (count) => count - 2],
];

export default function GalleryImage({ path, title, count, setCount }) {
  return (
    <div className="image-card">
      <h2 className="image-title">{title}</h2>
      <img src={path} alt={title} className="image" />
      <Counter count={count} />
      <div className="btn-group">
        {btnContents.map(([label, condition, update]) =>
          condition(count) ? (
            <Btn
              key={label}
              label={label}
              funcOnClick={() => setCount(update(count))}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
