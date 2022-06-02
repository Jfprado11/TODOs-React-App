import React from 'react';

import { AppUi } from './AppUi';

// const defaultTodos = [
//   { text: 'mobile first', completed: false },
//   { text: 'intro a js', completed: false },
//   { text: 'practico de js', completed: true },
//   { text: 'v8 curso', completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
    //eslint-disable-next-line
  }, []);

  const saveItem = (newTodos) => {
    try {
      const stringfyTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringfyTodos);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
}

function App() {
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
    <AppUi
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
