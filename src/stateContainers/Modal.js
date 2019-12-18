import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = props => {
  // TODO: setup submitHandler to update task list
  // within Context/store
  const submitHandler = (event, task) => {
    event.preventDefault();
    console.log(event, task);
  };
  const [newTask, setNewTask] = useState('');

  return (
    <div className={classes.Modal}>
      <form>
        <input
          type='text'
          id='task'
          name='task'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder='Email'
        />
        <button type='submit' onClick={e => submitHandler(e, newTask)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Modal;
