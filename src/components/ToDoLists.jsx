import React from 'react';

import ToDo from './ToDo';

const ToDoLists = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <ToDo todos={todos} setTodos={setTodos} key={todo._id} todo={todo} />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoLists;
