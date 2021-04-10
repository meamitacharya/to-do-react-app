import { useState } from 'react';
import './App.css';

import Form from './components/Form';
import ToDoLists from './components/ToDoLists';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

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
      />
      <ToDoLists todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
