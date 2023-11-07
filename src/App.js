import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './Footer';

function App() {
  const title = 'Task Tracker'; // Set your application title here

  // Define a function to handle adding tasks
  const addTask = (newTask) => {
    // Implement your logic to add the task here
    console.log('New Task:', newTask);
  };

  const containerStyle = {
    backgroundColor: '#e0e0e0', // Replace with your desired background color
  };

  return (
    <div className="container" style={containerStyle}>
      <Header title={title} />
      <AddTask onAddTask={addTask} />
      <Tasks />
      <Footer/>
    </div>
  );
}

export default App;
