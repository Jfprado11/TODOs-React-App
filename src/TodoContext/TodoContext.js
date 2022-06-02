import React from 'react';

const TodoContext = React.createContext();

function TodoProvider(props) {
  return (
    <TodoContext.Consumer>
      {props.children}
    </TodoContext.Consumer>
  )
}
