
import styles from './Todo.module.css';
import Btn from './Btn';

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`${styles.todo} ${todo.completed ? styles.completed : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <Btn text="Удалить" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};
