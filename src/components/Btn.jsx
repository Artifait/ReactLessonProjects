import styles from "./Btn.module.css";

export default function Btn({ text, onClick, type = "button" }) {
  return (
    <button className={styles.btn} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
