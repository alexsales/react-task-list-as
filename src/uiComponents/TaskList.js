import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SortOrder from '../uiComponents/SortOrder';
import EditDelete from '../stateContainers/EditDelete';
import classes from './TaskList.module.css';

const TaskList = props => {
  // move test tasks to AppContext
  // const taskListTmp = [[<li key='0'>'abc'</li>], [<li key='1'>'cde'</li>], []];

  // access taskList hard-coded test data from AppContext
  const appContext = useContext(AppContext);

  // get sort order from AppContext and use below switch to .concat() arrays
  // in the order specified
  const sortOrder = appContext.displayPriority;

  // TODO: outsource creation of <li> list items into
  // a separate component
  // e.g. <TaskListItems list={appContext.taskList[0]} priority={0}/>
  const highPriorityTasks = appContext.taskList[0].map((item, i) => (
    <li key={'high' + i}>
      {item}
      <EditDelete name={item} indx={i} priority='high' />
    </li>
  ));
  const mediumPriorityTasks = appContext.taskList[1].map((item, i) => (
    <li key={'medium' + i}>
      {item}
      <EditDelete name={item} indx={i} priority='medium' />
    </li>
  ));
  const lowPriorityTasks = appContext.taskList[2].map((item, i) => (
    <li key={'low' + i}>
      {item}
      <EditDelete name={item} indx={i} priority='low' />
    </li>
  ));

  let sortedListItems = [];
  switch (sortOrder) {
    case 'mediumHighLow':
      sortedListItems = mediumPriorityTasks
        .concat(highPriorityTasks)
        .concat(lowPriorityTasks);
      break;
    case 'mediumLowHigh':
      sortedListItems = mediumPriorityTasks
        .concat(lowPriorityTasks)
        .concat(highPriorityTasks);
      break;
    case 'low':
      sortedListItems = lowPriorityTasks
        .concat(mediumPriorityTasks)
        .concat(highPriorityTasks);
      break;
    default:
      sortedListItems = highPriorityTasks
        .concat(mediumPriorityTasks)
        .concat(lowPriorityTasks);
  }

  return (
    <div className={classes.TaskList}>
      <SortOrder />
      <ul>{sortedListItems}</ul>
      <button onClick={appContext.toggleModal}>Add New Task</button>
    </div>
  );
};

export default TaskList;
