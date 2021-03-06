import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form';
import ToDoLists from './components/ToDoLists';

function App() {
  //States of application
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // This function runs only once when app is mounted in DOM
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/todos`
        );
        setTodos(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchTodos();
  }, []);

  // This effect runs when there is state changes in : Todos and Status
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filterHandler();

    //Saving data in local Storage
   //  const saveLocalTodos = () => {
   //    localStorage.setItem('todos', JSON.stringify(todos));
   //  };

   //  saveLocalTodos();
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>Amit's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoLists
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
