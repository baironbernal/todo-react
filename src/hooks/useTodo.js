import { useState } from 'react';

const useTodo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Mi primera tarea',
      completed: false
    },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const numberUncompleted = () => {
    return todos.filter(todo => todo.completed !== true).length;
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) =>  prevTodos.filter(todo => todo.completed !== true));
    
  };

  return { todos, addTodo, toggleTodo, removeTodo, numberUncompleted, clearCompleted };
};

export default useTodo;
