import React, { useState, useContext } from 'react';
import Modal from '../stateContainers/Modal';
import { AppContext } from '../context/AppContext';

const EditDelete = props => {
  const [showInput, setInput] = useState(false);
  const appContext = useContext(AppContext);

  let content = (
    <form>
      <button
        onClick={e => {
          e.preventDefault();
          setInput(true);
        }}>
        edit
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          appContext.deleteTask(props.indx, props.priority);
        }}>
        delete
      </button>
    </form>
  );

  if (showInput) {
    content = (
      <form>
        <Modal
          indx={props.indx}
          priority={props.priority}
          showModal={showInput}
          cancel={bool => setInput(bool)}
        />
      </form>
    );
  }

  return <>{content}</>;
};

export default EditDelete;
