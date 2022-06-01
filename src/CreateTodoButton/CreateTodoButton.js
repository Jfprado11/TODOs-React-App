import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {};

  return (
    <button className="CreateTodoButton" onClick={() => alert('click!!')}>
      <span className="material-icons add-icon">add</span>
    </button>
  );
}

export { CreateTodoButton };
