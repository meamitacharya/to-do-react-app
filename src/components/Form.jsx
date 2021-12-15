import React from 'react';
import axios from 'axios';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Get Input value from input text and set it to state
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputText === '') {
      setInputText();
    } else {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/todos`,
        {
          task: inputText,
        }
      );
      const newTask = response.data.data
      setTodos([...todos, newTask]);
    }
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
