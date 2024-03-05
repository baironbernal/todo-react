import { createContext, useContext } from "react";
import useTodo from "../hooks/useTodo";


const myGlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useStateTodo() {
  return useContext(myGlobalContext);
}

export function ContextGlobal({ children }) {
  const { todos, removeTodo, addTodo, toggleTodo, numberUncompleted, clearCompleted } = useTodo();

  return (
    <myGlobalContext.Provider value={{ todos, removeTodo, addTodo,toggleTodo, numberUncompleted, clearCompleted }}>
      {children}
    </myGlobalContext.Provider>
  );
}
