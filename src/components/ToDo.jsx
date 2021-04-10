import React from 'react';

const ToDo = ({ todo, todos, setTodos }) => {
  const deleteToDoHandler = () => {
    setTodos(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  };

  const completeToDoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button
        className="complete-btn"
        onClick={completeToDoHandler}
        // disabled={todo.isCompleted ? true : false}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteToDoHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
