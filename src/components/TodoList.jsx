// TodoList.js

import { useStateTodo } from "../context/TodoContext";
import xLogo from '../assets/images/icon-cross.svg'
import { useEffect, useState } from "react";

const TodoList = () => {
  const { todos, removeTodo, toggleTodo, numberUncompleted, clearCompleted } = useStateTodo();
  const [todoList, setTodoList] = useState(todos);
  const [filter, setFilter] = useState('all');
  

  const handleRemove = (id) => {
    return () => {
      console.log("ss")
      removeTodo(id);
    };
  };

  const filterByState = (state = null) => {
    if(state === null) {
      return setTodoList(todos)
    }
    return setTodoList(todos.filter(todo => todo.completed === state));
  }

  const removeCompleted = () => {
    return () => {
      clearCompleted();
    }
  }

  const handleToggleTodo = (id) => {
    return () => {
      setFilter("all")
      toggleTodo(id)
    }
  }

  useEffect(() => {
    setTodoList(todos)
  }, [todos]);

  return (
    <div className="container">
      <div className="alert"></div>
      <div className="card">
        <div>
          <ul className="tasks">
            {todoList.map(todo => (
              <li 
              className={`task ${todo.completed ? 'checkedTodo' : ''}`} key={todo.id} 
              onClick={handleToggleTodo(todo.id)}>
                <input className="task-input" type="checkbox" />
                <label>
                  <span className={`custom_checkbox ${todo.completed ? 'checkedTodoCheck' : ''}`} ></span>
                  {todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}
                </label>
                <span className="deleteBtn" onClick={handleRemove(todo.id)}>
                  <img className="delete" src={xLogo} alt="x-logo" id="1" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="task items_left">
          <p className="counter">{numberUncompleted() + ' items left'}</p>
          <button className="btn clear" onClick={removeCompleted()}>Clear Completed</button>
        </div>
      </div>

      <div className="bottom">
        <div className="buttons filter-todos">
          <button className={`btn ${filter==='all' ? 'active' : ''}`} onClick={() => {
            filterByState()
            setFilter("all")
          }}
          value="all">All</button>
          <button className={`btn ${filter=== 'active' ? 'active' : ''}`}  onClick={() => {
            filterByState(false)
            setFilter("active")
          }}
          value="active">Active</button>

          <button className={`btn ${filter=== 'completed' ? 'active' : ''}`} onClick={() => {
            filterByState(true)
            setFilter("completed")
          }} value="completed">Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
