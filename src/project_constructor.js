"use task";

const project = name => {
  "use strict";
  let _name = name;
  let _tasks = [];

  const getName = () => _name;
  const getTasks = () => _tasks;
  const addTask = (task) => (_tasks.push(task));

  return {
    getName,
    getTasks,
    addTask
  };
};

export { project };
