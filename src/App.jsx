// App.jsx
import React, { useState } from 'react';
import Header from '../src/Components/Header';
import TodoForm from '../src/Components/TodoForm';
import TodoListContainer from '../src/Components/TodoListContainer';

function App() {
  return (
    <div className="todoapp stack-large">
      <Header />
      <TodoForm />
      <TodoListContainer />
    </div>
  );
}

export default App;
