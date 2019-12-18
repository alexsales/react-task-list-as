import React from 'react';

const TaskList = props => {
  // use array of tasks and .map through each,
  // build a list of <li>..</li> elements,
  // pass task items through props object (data from App.js)
  // const taskList = ...
  const taskListTmp = [[<li>'abc'</li>], [<li>'cde'</li>], []];

  return (
    <>
      <ul>{taskListTmp[0]}</ul>
      <ul>{taskListTmp[1]}</ul>
      <ul>{taskListTmp[2]}</ul>
    </>
  );
};

export default TaskList;
