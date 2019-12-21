import React, { useState, useContext } from 'react';
import classes from './Modal.module.css';
import { AppContext } from '../context/AppContext';

const Modal = props => {
  // TODO: setup submitHandler to update task list within Context/store

  // commented out, moving state management to AppContext
  // const submitHandler = (event, task) => {
  //   event.preventDefault();
  //   console.log(event, task);
  // };
  const [newTask, setNewTask] = useState('');
  const [priority, setNewPriority] = useState('default');

  // state management via AppContext
  const appContext = useContext(AppContext);

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
        <select
          value={priority}
          onChange={e => {
            console.log('select value', e.target.value);
            setNewPriority(e.target.value);
          }}>
          <option value='default'>Select Priority</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
        <button
          type='submit'
          onClick={e => {
            e.preventDefault();
            props.submit({ newTask, priority });
            appContext.toggleModal();
          }}>
          Submit
        </button>
      </form>
      <div>(default priority: medium)</div>
    </div>
  );
};

export default Modal;
