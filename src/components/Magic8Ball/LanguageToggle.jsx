import styles from "./LanguageToggle.module.css";

export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className={styles.toggle}>
      <button
        className={language === "ru" ? styles.active : ""}
        onClick={() => setLanguage("ru")}
      >
        RU
      </button>
      <button
        className={language === "en" ? styles.active : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
