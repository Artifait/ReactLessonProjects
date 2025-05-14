import { useEffect, useState } from "react";
import CoffeCard from "./CoffeCard";

export default function CoffeCards({ mode = "normal" }) {
  const [coffe, setCoffe] = useState([]);
  const [er, setEr] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchCoffee = async () => {
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

      try {
        const res = await fetch("https://api.sampleapis.com/coffee/hot");
        if (!res.ok) {
          throw new Error("ответ не ok");
        }
        const data = await res.json();
        setCoffe(data);
      } catch (error) {
        setEr("Что-то пошло не так...");
      } finally {
        setLoad(false);
      }
    };

    fetchCoffee();
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
    <div className="coffee-cards">
      {coffe.map(item => (
        <CoffeCard key={item.id} {...item} />
      ))}
    </div>
  );
}
