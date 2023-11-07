import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const title = 'Task Tracker'; // Set your application title here

  return (
    <div className="container">
      <Header title={title} />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
