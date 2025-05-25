import { useState } from "react";
import styles from "./Magic8Ball.module.css";
import magicBallAnswers from "../../data/Answers";
import LanguageToggle from "./LanguageToggle";
import QuestionInput from "./QuestionInput";
import AnswerDisplay from "./AnswerDisplay";
import BallImage from "./BallImage";
import Btn from "./Btn";

export default function Magic8Ball() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [language, setLanguage] = useState("ru");

  const getRandomAnswer = () => {
    if (!question.trim()) return;
    const index = Math.floor(Math.random() * magicBallAnswers.length);
    setAnswer(magicBallAnswers[index][language]);
  };

  return (
    <div>
      <h1 className={styles.title}>Magic 8 Ball</h1>
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <QuestionInput question={question} setQuestion={setQuestion} />
      <Btn text="Спросить Шар" onClick={getRandomAnswer} />
      <BallImage answerText={answer?.text || ""} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}
