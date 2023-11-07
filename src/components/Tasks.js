import React from 'react';

const tasks = [
  {
    id: 1,
    text: 'Wine',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Beer',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Arack',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];

const Task = ({ task }) => {
  return (
    <div>
      {task.text} - {task.day}
    </div>
  );
}

const TaskList = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;



// const tasks = [{
//     id: 1,
//     text: 'Wine',
//     day: 'May 5th at 2:30pm',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Beer',
//     day: 'May 6th at 1:30pm',
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: 'Arack',
//     day: 'May 7th at 12:30pm',
//     reminder: false,
//   },]
// ]

// const Task = () => {
//   return (
//     <div>Task</div>
//   )
// }

// export default Task