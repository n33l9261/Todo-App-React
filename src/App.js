import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Clock from 'react-digital-clock';



function App() {
  return (
    
    

    <div className='todo-app'>
   
      <TodoList />
      <Clock />
    </div>
    
  );
}

export default App;
