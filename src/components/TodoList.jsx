import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className={styles.list}>
      {todos.map(task => (
        <Todo
          key={task.id}
          task={task}
          level={0}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
