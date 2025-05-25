import styles from "./QuestionInput.module.css";

export default function QuestionInput({ question, setQuestion }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Задай вопрос..."
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
    />
  );
}
