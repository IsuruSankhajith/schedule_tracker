import React from 'react';

function AddTask() {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task:</label>
        <input type='text' placeholder='Enter a task' />
      </div>

      <div className='form-control'>
        <label>Day & Time:</label>
        <input type='text' placeholder='Enter the date and time' />
      </div>

      <div className='form-control'>
        <label>Set Reminder:</label>
        <input type='text' placeholder='Enter a reminder' />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
}

export default AddTask;
