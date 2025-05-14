import { useEffect, useState } from "react";
import CoffeCard from "./CoffeCard";

export default function CoffeCards({ mode = "normal" }) {
  const [coffe, setCoffe] = useState([]);
  const [er, setEr] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    setEr('');
    setCoffe([]);

    if (mode === 'error') {
      setTimeout(() => {
        setEr("Ошибка при загрузке данных.");
        setLoad(false);
      }, 1000);
      return;
    }

    if (mode === 'slow') {
      return;
    }

    fetch("https://api.sampleapis.com/coffee/hot")
      .then((x) => x.json())
      .then((y) => setCoffe(y))
      .catch(() => setEr("Что-то пошло не так..."))
      .finally(() => setLoad(false));
  }, [mode]);

  if (load) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Загружаем вкусноту...</p>
      </div>
    );
  }

  if (er) {
    return (
      <div className="loader-container">
        <h1>{er}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="coffee-cards">
        {coffe.map(item => (
          <CoffeCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

