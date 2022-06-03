import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="todo-search--input"
      placeholder="Buscar..."
      onChange={onSearchValue}
      value={searchValue}
    />
  );
}

export { TodoSearch };
