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
  // React Hook useState to mimic State in functional components
  const [tasks, setTasks] = useState([[], [], []]);
  const [isOpen, setIsOpen] = useState(false);
  const [sortedBy, setSortedBy] = useState('high');

  const addNewTask = newTask => {
    // console.log(newTask);

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
      }
      return updatedTaskList;
    });
  };

  const toggleOpenModal = () => setIsOpen(!isOpen);
  const updateSortOrder = newSortOrder => setSortedBy(newSortOrder);

  // TODO:
  // const deleteTask = task => { .. }

  return (
    <AppContext.Provider
      value={{
        taskList: tasks,
        isModalOpen: isOpen,
        addTask: addNewTask,
        toggleModal: toggleOpenModal,
        displayPriority: sortedBy,
        changeSortOrder: updateSortOrder
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
