import { useEffect, useState } from "react";
import CoffeCard from "./CoffeCard";

export default function CoffeCards() {

  const [coffe, setCoffe] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((x) => x.json())
      .then((y) => setCoffe(y))
  })

  return (
    <div className="coffee-cards">
      {coffe.map(item => (
        <CoffeCard key={item.id} {...item} />
      ))}
    </div>
  );
}
