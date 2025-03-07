import React from 'react';
import "../css/portal/Task.css";

function Task() {
  return (
    <div className='tasktype mt-5'>
      <div className='taskname'>
        <h2>Task Submission</h2>
        
      </div>

      <div className='task-container'>
        <div className='task-card text-center pt-3'>
          <h3>Task-1</h3>
          <p>(FE-20) Create HTML page</p>
          <p>Submitted: 01-02-2025</p>
          <p>Mark: 8</p>
          <button className='taskbtn'>View</button>
        </div>

        <div className='task-card text-center pt-3'>
          <h3>Task-2</h3>
          <p>(FE-20) Adding Style and Attributes</p>
          <p>Submitted: 01-02-2025</p>
          <p>Mark: 8.5</p>
          <button className='taskbtn'>View</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
