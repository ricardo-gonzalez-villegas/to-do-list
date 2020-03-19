"use strict";

const title = taskTitle => {
  const div = document.createElement("div");
  div.classList.add("task-title-container");
  const title = document.createElement("div");
  title.classList.add("task-title");
  title.innerHTML = taskTitle;
  div.appendChild(title);
  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerHTML = "Edit";
  div.appendChild(edit);
  return div;
};

const date = taskDate => {
  const div = document.createElement("div");
  div.innerHTML = `<span>Due:</span> ${taskDate}`;
  div.classList.add("due-date");
  return div;
};

const priority = taskPriority => {
  const div = document.createElement("div");
  div.innerHTML = `<span>Priority:</span> ${taskPriority}`;
  div.classList.add("priority");
  return div;
};

const subtask1 = (taskSubtask1, completed1) => {
  const div = document.createElement("div");
  div.classList.add("sub-task");
  const sub = document.createElement('div');
  sub.classList.add('display-sub-task');
  div.appendChild(sub);
  sub.innerHTML = `${taskSubtask1}`;
  const check = document.createElement("div");
  check.classList.add("check-div");
  div.appendChild(check);
  const checkBut = document.createElement("button");
  checkBut.classList.add("check-button-subtask");
  checkBut.dataset.value = 'subtask1';
  checkBut.innerHTML = "&#x2713;";
  check.appendChild(checkBut);
  switch (completed1) {
    case true:
      sub.classList.add("completed");
      break;

    case false:
      if (sub.classList.contains("completed"))
      sub.style.classList.remove("completed");
      break;
  }
  return div;
};

const subtask2 = (taskSubtask2, completed2) => {
  const div = document.createElement("div");
  div.classList.add("sub-task");
  const sub = document.createElement('div');
  sub.classList.add('display-sub-task');
  div.appendChild(sub);
  sub.innerHTML = `${taskSubtask2}`;
  const check = document.createElement("div");
  check.classList.add("check-div");
  div.appendChild(check);
  const checkBut = document.createElement("button");
  checkBut.classList.add("check-button-subtask");
  checkBut.dataset.value = 'subtask2';
  checkBut.innerHTML = "&#x2713;";
  check.appendChild(checkBut);
  switch (completed2) {
    case true:
      sub.classList.add("completed");
      break;

    case false:
      if (sub.classList.contains("completed"))
      sub.style.classList.remove("completed");
      break;
  }
  return div;
};

const description = taskDescription => {
  const div = document.createElement("div");
  div.classList.add("description-container");
  const descriptionTitle = document.createElement("div");
  descriptionTitle.classList.add("description-title");
  descriptionTitle.innerHTML = "Description";
  div.appendChild(descriptionTitle);
  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = `${taskDescription}`;
  div.appendChild(description);
  return div;
};

const notes = taskNotes => {
  const div = document.createElement("div");
  div.classList.add("notes-container");
  const notesTitle = document.createElement("div");
  notesTitle.classList.add("notes-title");
  notesTitle.innerHTML = "Notes";
  div.appendChild(notesTitle);
  const notes = document.createElement("div");
  notes.classList.add("notes");
  notes.innerHTML = `${taskNotes}`;
  div.appendChild(notes);
  return div;
};

const subtasksTitle = () => {
  const div = document.createElement("div");
  div.classList.add("sub-title");
  div.innerHTML = `Subtasks`;
  return div;
};

const displayTask = task => {
  const container = document.createElement("div");
  container.classList.add("task");
  container.appendChild(title(task.title));
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-priority");
  dateContainer.appendChild(date(task.date));
  dateContainer.appendChild(priority(task.priority));
  container.appendChild(dateContainer);
  container.appendChild(description(task.description));
  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-container");
  subContainer.appendChild(subtasksTitle());
  if (!task.subtask1.length == 0) {
    subContainer.appendChild(subtask1(task.subtask1, task.subtask1Completed));
  }
  if (!task.subtask2.length == 0) {
    subContainer.appendChild(subtask2(task.subtask2, task.subtask2Completed));
  }
  container.appendChild(subContainer);
  container.appendChild(notes(task.notes));
  return container;
};

export { displayTask };
