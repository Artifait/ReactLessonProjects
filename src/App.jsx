import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [mode, setMode] = useState("normal");

  return (
    <>
      <h1>Интернет-магазин</h1>
      <ControlPanel setMode={setMode} />
      <hr />
      <ProductList mode={mode} />
    </>
  );
}

export default App;
