import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SortOrder from '../uiComponents/SortOrder';
import EditDelete from '../uiComponents/EditDelete';

const TaskList = props => {
  // move test tasks to AppContext
  // const taskListTmp = [[<li key='0'>'abc'</li>], [<li key='1'>'cde'</li>], []];

  // access taskList hard-coded test data from AppContext
  const appContext = useContext(AppContext);
  console.log(appContext);

  // get sort order from AppContext and use below switch to .concat() arrays
  // in the order specified
  const sortOrder = appContext.displayPriority;

  // TODO: outsource creation of <li> list items into
  // a separate component
  // e.g. <TaskListItems list={appContext.taskList[0]} priority={0}/>
  const highPriorityTasks = appContext.taskList[0].map((item, i) => (
    <li key={'high' + i}>
      {item}
      <EditDelete liKey={'high' + i} title={item} />
    </li>
  ));
  const mediumPriorityTasks = appContext.taskList[1].map((item, i) => (
    <li key={'medium' + i}>
      {item}
      <EditDelete liKey={'medium' + i} title={item} />
    </li>
  ));
  const lowPriorityTasks = appContext.taskList[2].map((item, i) => (
    <li key={'low' + i}>
      {item}
      <EditDelete liKey={'low' + i} title={item} />
    </li>
  ));

  let sortedListItems = highPriorityTasks
    .concat(mediumPriorityTasks)
    .concat(lowPriorityTasks);
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
  }

  return (
    <>
      <SortOrder />
      <ul>{sortedListItems}</ul>
      <button onClick={appContext.toggleModal}>Add New Task</button>
    </>
  );
};

export default TaskList;
