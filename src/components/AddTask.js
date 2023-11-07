import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');
  const [dayAndTime, setDayAndTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert('Please enter a task');
      return;
    }

    // Call the onAddTask method to add the task
    onAddTask({ task, dayAndTime, reminder });

    // Clear the form fields
    setTask('');
    setDayAndTime('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Task:</label>
        <input
          type='text'
          placeholder='Enter a task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time:</label>
        <input
          type='text'
          placeholder='Enter the date and time'
          value={dayAndTime}
          onChange={(e) => setDayAndTime(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Set Reminder:</label>
        <input
          type='checkbox'
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
}

export default AddTask;
