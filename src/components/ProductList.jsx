import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ mode = "normal" }) {
  const [products, setProducts] = useState([]);
  const [er, setEr] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      setEr("");
      setProducts([]);

      if (mode === "error") {
        setTimeout(() => {
          setEr("Ошибка при загрузке товаров.");
          setLoad(false);
        }, 1000);
        return;
      }

      if (mode === "slow") {
        return;
      }

      try {
        const res = await fetch(
          "https://fakestoreapiserver.reactbd.com/walmart"
        );
        if (!res.ok) throw new Error("Ответ не OK");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setEr("Что-то пошло не так...");
      } finally {
        setLoad(false);
      }
    };

    fetchProducts();
  }, [mode]);

  if (load) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Загружаем товары...</p>
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
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
