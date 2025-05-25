import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/About/">About</Link>
      <Link to="/Contact/">Contact</Link>
      <Link to="/Magic8Ball/">Magic 8 Ball</Link>
      <Link to="/Countries/">Countries</Link>
    </nav>
  );
}
