import React, { createContext, useState } from 'react';

// sets defaults, but will also initialize below
export const AppContext = createContext({
  // taskList[0] - highest priority,
  // taskList[1] - medium priority,
  // taskList[2] - lowest priority,
  taskList: [[], [], []],
  isModalOpen: false,
  addTask: () => {},
  toggleModal: () => {},
  displayPriority: 'high'
});

const AppContextProvider = props => {
  const tempTasks = sessionStorage.getItem('taskList');

  let initTasks = [[], [], []];
  if (tempTasks) {
    initTasks = JSON.parse(tempTasks);
  }

  // React Hook useState to mimic State in functional components
  const [tasks, setTasks] = useState(initTasks);
  const [isOpen, setIsOpen] = useState(false);
  const [sortedBy, setSortedBy] = useState('high');

  const addNewTask = newTask => {
    // taskList[0] - highest priority,
    // taskList[1] - medium priority,
    // taskList[2] - lowest priority,
    setTasks(prevState => {
      let updatedTaskList = [...prevState];
      switch (newTask.priority) {
        case 'high':
          updatedTaskList[0] = [...updatedTaskList[0], newTask.newTask];
          break;
        case 'medium':
        case 'default':
          updatedTaskList[1] = [...updatedTaskList[1], newTask.newTask];
          break;
        case 'low':
          updatedTaskList[2] = [...updatedTaskList[2], newTask.newTask];
          break;
        default:
          return updatedTaskList;
      }
      sessionStorage.setItem('taskList', JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
  };

  const toggleOpenModal = () => setIsOpen(!isOpen);
  const updateSortOrder = newSortOrder => setSortedBy(newSortOrder);

  const updateTask = (name, index, newPriority, prevPriority) => {
    setTasks(prevState => {
      removeTask(index, prevPriority);
      addNewTask({ newTask: name, priority: newPriority });
    });
  };

  const removeTask = (index, priority) => {
    setTasks(prevState => {
      let updatedTaskList = [...prevState];
      switch (priority) {
        case 'high':
          updatedTaskList[0] = [...updatedTaskList[0]];
          updatedTaskList[0] = updatedTaskList[0]
            .slice(0, index)
            .concat(
              updatedTaskList[0].slice(index + 1, updatedTaskList[0].length)
            );
          break;
        case 'medium':
          updatedTaskList[1] = [...updatedTaskList[1]];
          updatedTaskList[1] = updatedTaskList[1]
            .slice(0, index)
            .concat(
              updatedTaskList[1].slice(index + 1, updatedTaskList[1].length)
            );
          break;
        case 'low':
          updatedTaskList[2] = [...updatedTaskList[2]];
          updatedTaskList[2] = updatedTaskList[2]
            .slice(0, index)
            .concat(
              updatedTaskList[2].slice(index + 1, updatedTaskList[2].length)
            );
          break;
        default:
          return updatedTaskList;
      }
      sessionStorage.setItem('taskList', JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
  };

  return (
    <AppContext.Provider
      value={{
        taskList: tasks,
        isModalOpen: isOpen,
        addTask: addNewTask,
        toggleModal: toggleOpenModal,
        displayPriority: sortedBy,
        changeSortOrder: updateSortOrder,
        editTask: updateTask,
        deleteTask: removeTask
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
