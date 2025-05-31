import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Errore from "./components/Errore";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="/load" element={<Loader />} />
          <Route
            path="/errore"
            element={<Errore msg="Ошибка во время загрузки товаров" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
