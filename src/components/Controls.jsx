import React from 'react';
import Btn from './Btn';
import styles from './Controls.module.css';

export default function Controls({ onClearAll, onClearCompleted }) {
  return (
    <div className={styles.controls}>
      <Btn text="Удалить все" onClick={onClearAll} />
      <Btn text="Удалить завершённые" onClick={onClearCompleted} />
    </div>
  );
}
