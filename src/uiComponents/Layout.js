import React, { useContext } from 'react';
import Modal from '../stateContainers/Modal';
import TaskList from '../uiComponents/TaskList';
import { AppContext } from '../context/AppContext';

const Layout = props => {
  // using AppContext, pass the function to the Modal
  // component that will add a newTask to the AppContext/State
  const appContext = useContext(AppContext);
  let modalContent = appContext.isModalOpen ? (
    <Modal
      submit={newTask => {
        appContext.addTask(newTask);
      }}
    />
  ) : (
    ''
  );

  return (
    <div>
      {modalContent}
      <TaskList />
    </div>
  );
};

export default Layout;
