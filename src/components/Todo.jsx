import { useState } from 'react';
import { RiDeleteBin5Line, RiAddLine, RiCheckLine, RiArrowGoBackLine } from 'react-icons/ri';
import styles from './Todo.module.css';
import TodoForm from './TodoForm';

export default function Todo({ task, level, addTodo, toggleTodo, deleteTodo }) {
  const [expanded, setExpanded] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleAddChild = (text) => {
    addTodo(text, task.id);
    setShowForm(false);
    setExpanded(true);
  };

  return (
    <div className={styles.todoWrapper} style={{ marginLeft: level * 20 }}>
      <div className={`${styles.todo} ${task.completed ? styles.completed : ''}`}>
        <div className={styles.content}>
          {task.children.length > 0 && (
            <button className={styles.caret} onClick={() => setExpanded(prev => !prev)}>
              {expanded ? '▼' : '▶'}
            </button>
          )}
          <span>{task.text}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={() => toggleTodo(task.id)} title={task.completed ? 'Восстановить' : 'Завершить'}>
            {task.completed ? <RiArrowGoBackLine /> : <RiCheckLine />}
          </button>
          <button className={styles.iconBtn} onClick={() => setShowForm(prev => !prev)} title={showForm ? 'Отмена' : 'Добавить подзадачу'}>
            <RiAddLine style={{ transform: showForm ? 'rotate(45deg)' : 'none' }} />
          </button>
          <button className={styles.iconBtn} onClick={() => deleteTodo(task.id)} title="Удалить">
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>

      {showForm && (
        <div className={styles.subForm}>
          <TodoForm
            addTodo={handleAddChild}
            placeholder="Новая подзадача..."
          />
        </div>
      )}
      {expanded && task.children.length > 0 && (
        <div>
          {task.children.map(child => (
            <Todo
              key={child.id}
              task={child}
              level={level + 1}
              addTodo={addTodo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
