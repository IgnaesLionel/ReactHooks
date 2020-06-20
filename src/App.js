import React from 'react';
import './App.css';
import Hook from './Hook';
import Todo from './components/Todo'

function App() {
  return (
    <div className="container">
      <Todo/>
      <Hook/>
    </div>
  );
}

export default App;
