import React, { createContext, useState } from 'react';

// sets defaults, but will also initialize below
export const AppContext = createContext({
  taskList: [],
  isModalOpen: false,
  addTask: () => {}
});

const AppContextProvider = props => {
  // React Hook useState to mimic State object
  // for functional components
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addNewTask = task => {
    const updatedTaskList = [...tasks, task];
  };

  // const deleteTask = task => { .. }

  return (
    <AppContext.Provider
      value={{ taskList: task, isModalOpen: isOpen, addTask: addNewTask }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
