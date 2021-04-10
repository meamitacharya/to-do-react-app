import React from 'react';

import ToDo from './ToDo';

const ToDoLists = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <ToDo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoLists;
