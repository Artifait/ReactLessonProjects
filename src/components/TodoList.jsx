import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className={styles.list}>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

