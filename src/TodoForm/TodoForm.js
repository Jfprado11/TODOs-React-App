import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChangeText = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega Todo</label>
      <textarea value={newTodoValue} onChange={onChangeText} placeholder="Escribe una nueva tarea" />
      <div className='TodoForm-btnContainer'>
        <button className='TodoForm-btn TodoForm-btn--cancel' type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className='TodoForm-btn TodoForm-btn--add' type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
