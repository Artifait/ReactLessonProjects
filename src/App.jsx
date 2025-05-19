import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Controls from './components/Controls';
import './App.css';

const addNode = (nodes, parentId, text) => {
  if (parentId === null) {
    return [
      ...nodes,
      { id: uuidv4(), text, completed: false, children: [] }
    ];
  }

  return nodes.map(node =>
    node.id === parentId
      ? {
        ...node,
        children: [
          ...node.children,
          { id: uuidv4(), text, completed: false, children: [] }
        ]
      }
      : { ...node, children: addNode(node.children, parentId, text) }
  );
};

const toggleNode = (nodes, id) => {
  const propagate = (node, status) => ({
    ...node,
    completed: status,
    children: node.children.map(child => propagate(child, status))
  });

  return nodes.map(node => {
    if (node.id === id) {
      const newStatus = !node.completed;
      return propagate(node, newStatus);
    }

    return { ...node, children: toggleNode(node.children, id) };
  });
};

const deleteNode = (nodes, id) =>
  nodes
    .filter(node => node.id !== id)
    .map(node => ({ ...node, children: deleteNode(node.children, id) }));

const removeCompleted = nodes =>
  nodes
    .filter(node => !node.completed)
    .map(node => ({
      ...node,
      children: removeCompleted(node.children)
    }));

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text, parentId = null) =>
    setTodos(prev => addNode(prev, parentId, text));

  const handleToggle = id =>
    setTodos(prev => toggleNode(prev, id));

  const handleDelete = id =>
    setTodos(prev => deleteNode(prev, id));

  const handleClearAll = () =>
    setTodos([]);

  const handleClearCompleted = () =>
    setTodos(prev => removeCompleted(prev));

  return (
    <div className="app">
      <h1>Список дел</h1>

      <Controls
        onClearAll={handleClearAll}
        onClearCompleted={handleClearCompleted}
      />

      <TodoForm addTodo={text => handleAdd(text, null)} />

      <TodoList
        todos={todos}
        addTodo={handleAdd}
        toggleTodo={handleToggle}
        deleteTodo={handleDelete}
      />
    </div>
  );
}
