import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const title = 'Task Tracker'; // Set your application title here

  // Define a function to handle adding tasks
  const addTask = (newTask) => {
    // Implement your logic to add the task here
    console.log('New Task:', newTask);
  };

  return (
    <div className="container">
      <Header title={title} />
      <AddTask onAddTask={addTask} />
      <Tasks />
    </div>
  );
}

export default App;
