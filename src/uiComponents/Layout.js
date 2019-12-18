import React from 'react';
import Modal from '../stateContainers/Modal';
import TaskList from '../uiComponents/TaskList';

const Layout = props => {
  return (
    <>
      <Modal />
      <TaskList />
    </>
  );
};

export default Layout;
