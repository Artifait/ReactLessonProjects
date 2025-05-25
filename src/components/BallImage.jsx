import styles from "./BallImage.module.css";
import { useEffect, useState } from "react";

function generateMaxLineLengths(lineCount) {
  const max = 15;
  const min = 5;
  const step = (max - min) / Math.max(lineCount - 1, 1);
  return Array.from({ length: lineCount }, (_, i) =>
    Math.round(max - step * i)
  );
}

function splitText(text, maxLineLengths) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const currentMaxLength = maxLineLengths[lines.length] ?? 0;

    if (line.length + word.length + (line ? 1 : 0) <= currentMaxLength) {
      line += (line ? " " : "") + word;
    } else {
      lines.push(line);
      line = word;

      if (lines.length >= maxLineLengths.length) {
        line += " " + words.slice(i + 1).join(" ");
        break;
      }
    }
  }

  if (line) lines.push(line);

  return lines;
}

export default function BallImage({ answerText }) {
  const [fontSize, setFontSize] = useState(12);
  const [lines, setLines] = useState([]);
  const [offsetY, setOffsetY] = useState(-49);

  useEffect(() => {
    if (!answerText) {
      setLines([]);
      setOffsetY(-49);
      return;
    }

    let currentFont = 18;
    let maxLines = 3;

    while (currentFont >= 6 && maxLines <= 6) {
      const maxLineLengths = generateMaxLineLengths(maxLines);
      const tentativeLines = splitText(answerText, maxLineLengths);

      const broken = tentativeLines.some(
        (line, i) => line.length > maxLineLengths[i]
      );

      if (!broken) {
        setFontSize(currentFont);
        setLines(tentativeLines);

        const offset = -30 - (tentativeLines.length - 1) * 10;
        setOffsetY(offset);
        return;
      }

      if (currentFont > 14) {
        currentFont--;
      } else {
        maxLines++;
        currentFont = 14;
      }
    }

    const fallbackMaxLines = 4;
    const fallbackLengths = generateMaxLineLengths(fallbackMaxLines);
    const fallbackLines = splitText(answerText, fallbackLengths);

    setFontSize(13);
    setLines(fallbackLines);
    setOffsetY(-49);
  }, [answerText]);

  return (
    <div className={styles.wrapper}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Magic_eight_ball.png/500px-Magic_eight_ball.png"
        alt="Magic 8 Ball"
        className={styles.image}
      />
      <div
        className={styles.textWrapper}
        style={{ transform: `translate(-50%, ${offsetY}px)` }}
      >
        <div className={styles.text} style={{ fontSize: `${fontSize}px` }}>
          {lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
