// AddTodoForm.js

import { useState } from 'react';
import { useStateTodo } from '../context/TodoContext';

const AddTodoForm = () => {

  const { addTodo } = useStateTodo();
  const [newTodo, setNewTodo] = useState('');
  
  const handleAddTodo = (e) => {
    e.preventDefault(); // Correcting the typo here

    if (newTodo.trim() !== '') {
      setNewTodo('');
    }

    addTodo(newTodo);
  };

  return (
    <>
       <form className="addTodo">
        <button className="btn addNewBtn" onClick={handleAddTodo}>
          <span className="plusSign custom_checkbox">+</span>
        </button>
        <input
          className="addNew"
          name="add"
          value={newTodo}
          type="text"
          onChange={e => setNewTodo(e.target.value)}
          id="create"
          placeholder="Create a new todo..."
          aria-label="Create a new todo..."
        />
      </form>
    </>
  );
};

export default AddTodoForm;
