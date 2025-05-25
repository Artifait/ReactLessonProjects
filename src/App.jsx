import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Magic8Ball from "./components/Magic8Ball/Magic8Ball";
import Navbar from "./components/Navbar";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/Magic8Ball/" element={<Magic8Ball />} />
        <Route path="/Countries/" element={<Countries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
