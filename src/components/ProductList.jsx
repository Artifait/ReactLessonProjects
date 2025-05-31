import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import Errore from "./Errore";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [er, setEr] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      setEr("");
      setProducts([]);

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
  }, []);

  if (load) {
    return <Loader />;
  }

  if (er) {
    return <Errore msg={er} />;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
