import React, { createContext, useState, useContext } from 'react';

// sets defaults, but will also initialize below
export const AppContext = createContext({
  taskList: [[], [], []],
  isModalOpen: false,
  addTask: () => {},
  toggleModal: () => {}
});

const AppContextProvider = props => {
  // React Hook useState to mimic State in functional components
  const [tasks, setTasks] = useState([[], [], []]);
  const [isOpen, setIsOpen] = useState(false);

  const appContext = useContext(AppContext);

  const addNewTask = newTask => {
    // console.log(newTask);

    setTasks(prevState => {
      let updatedTaskList = [...prevState];
      switch (newTask.priority) {
        case 'low':
          updatedTaskList[0] = [...updatedTaskList[0], newTask.newTask];
          break;
        case 'medium':
        case 'default':
          updatedTaskList[1] = [...updatedTaskList[1], newTask.newTask];
          break;
        case 'high':
          updatedTaskList[2] = [...updatedTaskList[2], newTask.newTask];
          break;
      }
      return updatedTaskList;
    });
  };

  const toggleOpenModal = () => setIsOpen(!isOpen);

  // TODO:
  // const deleteTask = task => { .. }

  return (
    <AppContext.Provider
      value={{
        taskList: tasks,
        isModalOpen: isOpen,
        addTask: addNewTask,
        toggleModal: toggleOpenModal
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
