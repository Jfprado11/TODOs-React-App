import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span onClick={props.onComplete} className={`"Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        <span className="material-icons">done</span>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        <span className="material-icons cancel-icon">cancel</span>
      </span>
    </li>
  );
}

export { TodoItem };
