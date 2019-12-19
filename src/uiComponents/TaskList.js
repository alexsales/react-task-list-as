import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TaskList = props => {
  // move test tasks to AppContext
  // const taskListTmp = [[<li key='0'>'abc'</li>], [<li key='1'>'cde'</li>], []];

  // access taskList hard-coded test data from AppContext
  // taskList[0] = highest priority,
  // taskList[1] = medium priority,
  // taskList[2] = lowest priority,
  const appContext = useContext(AppContext);

  return (
    <>
      <ul>{appContext.taskList[0]}</ul>
      <ul>{appContext.taskList[1]}</ul>
      <ul>{appContext.taskList[2]}</ul>
      <button onClick={appContext.toggleModal}>Add New Task</button>
    </>
  );
};

export default TaskList;
