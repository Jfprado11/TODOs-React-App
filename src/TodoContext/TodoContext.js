import React from 'react';

import { useLocalStorage } from '../TodoContext/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodo, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });
  }

  const completeTodo = (text) => {
    const todoIdx = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIdx].completed = !newTodos[todoIdx].completed;
    saveTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIdx = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIdx, 1);
    saveTodo(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
