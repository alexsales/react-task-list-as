import React, { createContext, useState } from 'react';

// sets defaults, but will also initialize below
export const AppContext = createContext({
  taskList: [],
  isModalOpen: false,
  addTask: () => {},
  toggleModal: () => {}
});

const AppContextProvider = props => {
  // React Hook useState to mimic State object
  // for functional components
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState([
    [<li key='0'>'abc'</li>],
    [<li key='1'>'cde'</li>],
    []
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const addNewTask = task => {
    const updatedTaskList = [...tasks, task];
  };

  const toggleOpenModal = () => setIsOpen(!isOpen);

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
