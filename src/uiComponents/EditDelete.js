import React from 'react';

const EditDelete = props => {
  const editTaskHandler = (key, title) => {
    console.log('edit: ', key, title);
  };

  const deleteTaskHandler = (key, title) => {
    console.log('delete: ', key, title);
  };

  return (
    <>
      <button onClick={() => editTaskHandler(props.liKey, props.title)}>
        edit
      </button>
      <button onClick={() => deleteTaskHandler(props.liKey, props.title)}>
        delete
      </button>
    </>
  );
};

export default EditDelete;
