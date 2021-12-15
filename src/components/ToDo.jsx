import React from 'react';
import axios from 'axios';

const ToDo = ({ todo, todos, setTodos }) => {
  const deleteToDoHandler = async (id) => {
    const text = `Are you sure you want to delete this task??`;
    const confirmValue = window.confirm(text);
    if (confirmValue === true) {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/todos/${id}`
      );
      setTodos(
        todos.filter((todo) => {
          return todo._id !== id;
        })
      );
    }
  };

  const completeToDoHandler = async (id) => {
    console.log(typeof todos);
    //  const arrItem = [...todos];
    //  console.log(typeof arrItem);
    //  console.log(arrItem);

    //  console.log(selectedTodo);

    setTodos(
      todos.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );

    const newEl = [...todos];

    const selectedTodo = newEl.filter((todo) => {
      return todo._id === id;
    });
    selectedTodo[0].isCompleted = !selectedTodo[0].isCompleted;
    await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/todos/${id}`, {
      selectedTodo,
    });
  };
  return (
    <div className="todo" key={todo._id}>
      <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
        {todo.task}
      </li>
      <button
        className="complete-btn"
        onClick={() => completeToDoHandler(todo._id)}
        // disabled={todo.isCompleted ? true : false}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteToDoHandler(todo._id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
