import { useState } from 'react';
import styles from './TodoForm.module.css';
import Btn from './Btn';

export default function TodoForm({ addTodo, placeholder = 'Добавить задачу...' }) {
  const [value, setValue] = useState('');

  const submitText = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={submitText} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Btn type="submit" text="Добавить" />
    </form>
  );
}
