import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   Link,
} from 'react-router-dom';

import { HomePage } from './components/Homepage/HomePage';
// import { Welcome } from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
