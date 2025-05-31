import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Norm</Link>
        <Link to="/load">Load</Link>
        <Link to="/errore">Errore</Link>
      </header>
      <h1>Интернет-магазин</h1>
      <hr />
      <Outlet />
    </>
  );
}
