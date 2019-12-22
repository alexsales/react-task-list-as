import React, { useState, useContext } from 'react';
import classes from './Modal.module.css';
import { AppContext } from '../context/AppContext';

const Modal = props => {
  // TODO: setup submitHandler to update task list within Context/store

  // commented out, moving state management to AppContext
  // const submitHandler = (event, task) => {
  //   event.preventDefault();
  // };
  const [newTask, setNewTask] = useState('');
  const [priority, setNewPriority] = useState('default');

  // state management via AppContext
  const appContext = useContext(AppContext);

  let btnContent = (
    <button
      type='submit'
      onClick={e => {
        e.preventDefault();
        props.submit({ newTask, priority });
        appContext.toggleModal();
      }}>
      Submit
    </button>
  );

  if (props.priority) {
    btnContent = (
      <>
        <button
          onClick={e => {
            e.preventDefault();
            priority !== 'default'
              ? appContext.editTask(
                  newTask,
                  props.indx,
                  priority,
                  props.priority
                )
              : appContext.editTask(
                  newTask,
                  props.indx,
                  props.priority,
                  props.priority
                );
            props.cancel(false);
          }}>
          Save
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            props.cancel(false);
          }}>
          Cancel
        </button>
      </>
    );
  }

  // TODO: add input field validation,
  // possibly create custom <Input /> component for all inputs
  return (
    <div className={classes.Modal}>
      <div className={classes.modalContainer}>
        <div>
          <input
            type='text'
            id='task'
            name='task'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder='Task Name'
          />
          <select
            value={priority}
            onChange={e => {
              setNewPriority(e.target.value);
            }}>
            <option value='default'>Select Priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
          {btnContent}
        </div>
        <div>(default priority: medium)</div>
      </div>
    </div>
  );
};

export default Modal;
