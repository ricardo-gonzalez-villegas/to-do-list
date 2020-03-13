"use strict";

const title = () => {
  const div = document.createElement("div");
  div.classList.add("task-title-container");
  const title = document.createElement("div");
  title.classList.add("task-title");
  title.innerHTML = `Task 1`;
  div.appendChild(title);
  return div;
};

const date = () => {
  const div = document.createElement("div");
  div.innerHTML = `<span>Due:</span> Today`;
  div.classList.add("due-date");
  return div;
};

const priority = () => {
  const div = document.createElement("div");
  div.innerHTML = `<span>Priority:</span> High`;
  div.classList.add("priority");
  return div;
};

const subtask1 = () => {
  const div = document.createElement("div");
  div.classList.add("sub-task");
  div.innerHTML = `<div>Sub Task 1</div>`;
  return div;
};

const subtask2 = () => {
  const div = document.createElement("div");
  div.classList.add("sub-task");
  div.innerHTML = `<div>Sub Task 2</div>`;
  return div;
};

const description = () => {
  const div = document.createElement("div");
  div.classList.add("description-container");
  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at urna sed nulla suscipit commodo vel sed est. Vestibulum pharetra tortor a arcu blandit, eget fringilla arcu tempus. Aliquam porttitor luctus mi, vel rutrum ex semper at. Consectetur adipiscing elit nunc at urna.`;
  div.appendChild(description);
  return div;
};

const notes = () => {
  const div = document.createElement("div");
  div.classList.add("notes-container");
  const notesTitle = document.createElement("div");
  notesTitle.classList.add("notes-title");
  notesTitle.innerHTML = "Notes";
  div.appendChild(notesTitle);
  const notes = document.createElement("div");
  notes.classList.add("notes");
  notes.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at urna sed nulla suscipit commodo vel sed est. Vestibulum pharetra tortor a arcu blandit, eget fringilla arcu tempus.`;
  div.appendChild(notes);
  return div;
};

const newSubtask = () => {
  const button = document.createElement("button");
  button.classList.add("sub-new");
  button.innerHTML = "+ New";
  return button;
};

const subtasksTitle = () => {
  const div = document.createElement("div");
  div.classList.add("sub-title");
  div.innerHTML = `Subtasks`;
  return div;
};

const displayTask = () => {
  const container = document.createElement("div");
  container.classList.add("task");
  container.appendChild(title());
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-priority");
  dateContainer.appendChild(date());
  dateContainer.appendChild(priority());
  container.appendChild(dateContainer);
  container.appendChild(description());
  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-container");
  subContainer.appendChild(subtasksTitle());
  subContainer.appendChild(subtask1());
  subContainer.appendChild(subtask2());
  subContainer.appendChild(newSubtask());
  container.appendChild(subContainer);
  container.appendChild(notes());
  return container;
};

export { displayTask };
