import React, { useContext } from 'react';
import Modal from '../stateContainers/Modal';
import TaskList from '../uiComponents/TaskList';
import { AppContext } from '../context/AppContext';

const Layout = props => {
  // use AppContext, pass isOpen to Modal component
  // an tasks to TaskList
  const appContext = useContext(AppContext);
  console.log(appContext);
  let modalContent = appContext.isModalOpen ? (
    <Modal submit={task => appContext.addTask(task)} />
  ) : (
    ''
  );
  console.log(modalContent);

  return (
    <>
      {modalContent}
      <TaskList />
    </>
  );
};

export default Layout;
