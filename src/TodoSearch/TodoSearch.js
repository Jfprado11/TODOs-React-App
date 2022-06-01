import React from 'react';

import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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
