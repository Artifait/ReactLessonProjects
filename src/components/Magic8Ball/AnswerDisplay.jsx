import styles from "./AnswerDisplay.module.css";

export default function AnswerDisplay({ answer }) {
  if (!answer) return null;
  return (
    <div className={styles.answer}>
      <p>{answer.text}</p>
    </div>
  );
}
