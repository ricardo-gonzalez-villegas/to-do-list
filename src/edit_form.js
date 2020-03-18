"use strict";

const title = taskTitle => {
  const div = document.createElement("div");
  div.classList.add("input-div");
  const label = document.createElement("label");
  label.for = "title";
  label.innerHTML = "Title";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("input");
  input.id = "edit-title";
  input.name = "title";
  input.type = "text";
  input.maxLength = 30;
  input.value = `${taskTitle}`;
  div.appendChild(input);
  return div;
};

const priority = taskPriority => {
  const div = document.createElement("div");
  div.classList.add("priority-div");
  const label = document.createElement("label");
  label.for = "priority";
  label.innerHTML = "Priority";
  div.appendChild(label);
  const select = document.createElement("select");
  select.id = "edit-priority";
  select.name = "priority";
  const low = document.createElement("option");
  low.value = "Low";
  low.innerHTML = "Low";
  select.appendChild(low);
  const medium = document.createElement("option");
  medium.value = "Medium";
  medium.innerHTML = "Medium";
  select.appendChild(medium);
  const high = document.createElement("option");
  high.value = "High";
  high.innerHTML = "High";
  select.appendChild(high);
  div.appendChild(select);
  switch (taskPriority) {
    case "Low":
      low.selected = true;
      break;

    case "Medium":
      medium.selected = true;
      break;

    case "High":
      high.selected = true;
      break;
  }
  return div;
};

const date = taskDate => {
  const div = document.createElement("div");
  div.classList.add("date-div");
  const label = document.createElement("label");
  label.for = "date";
  label.innerHTML = "Due";
  div.appendChild(label);
  div.appendChild(document.createElement("br"));
  const input = document.createElement("input");
  input.value = taskDate;
  input.id = "edit-date";
  input.name = "date";
  input.type = "date";
  div.appendChild(input);
  return div;
};

const subtasks = (taskSubtask1, taskSubtask2) => {
  const div = document.createElement("div");
  div.classList.add("form-subs");
  const subtask1 = document.createElement("div");
  subtask1.classList.add("subtask1");
  subtask1.classList.add("form-sub");
  div.appendChild(subtask1);
  const label1 = document.createElement("label");
  label1.for = "subtask1";
  label1.innerHTML = "Subtask";
  subtask1.appendChild(label1);
  subtask1.appendChild(document.createElement("br"));
  const input1 = document.createElement("input");
  input1.id = "edit-subtask1";
  input1.name = "subtask1";
  input1.type = "text";
  input1.value = taskSubtask1;
  input1.maxLength = 20;
  input1.size = 20;
  subtask1.appendChild(input1);
  const subtask2 = document.createElement("div");
  subtask2.classList.add("subtask2");
  subtask2.classList.add("form-sub");
  div.appendChild(subtask2);
  const label2 = document.createElement("label");
  label2.for = "subtask2";
  label2.innerHTML = "Subtask";
  subtask2.appendChild(label2);
  subtask2.appendChild(document.createElement("br"));
  const input2 = document.createElement("input");
  input2.id = "edit-subtask2";
  input2.name = "subtask2";
  input2.type = "text";
  input2.value = taskSubtask2;
  input2.maxLength = 30;
  input2.size = 30;
  subtask2.appendChild(input2);
  return div;
};

const description = taskDescription => {
  const div = document.createElement("div");
  div.classList.add("description-div");
  const label = document.createElement("label");
  label.for = "description";
  label.innerHTML = "Description";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("textarea");
  input.id = "edit-description";
  input.name = "description";
  input.value = taskDescription;
  input.rows = 5;
  input.maxLength = 300;
  div.appendChild(input);
  return div;
};

const notes = taskNotes => {
  const div = document.createElement("div");
  div.classList.add("notes-div");
  const label = document.createElement("label");
  label.for = "noes";
  label.innerHTML = "Notes";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("textarea");
  input.id = "edit-notes";
  input.name = "notes";
  input.value = taskNotes;
  input.rows = 5;
  input.maxLength = 300;
  div.appendChild(input);
  return div;
};

const button = () => {
  const button = document.createElement("button");
  button.id = "edit-form-button";
  button.classList.add("form-button");
  button.innerHTML = "Submit";
  return button;
};

const editTask = task => {
  const container = document.createElement("div");
  container.classList.add("edit-form");
  const form = document.createElement("form");
  form.id = "edit-form";
  container.appendChild(form);
  const top = document.createElement("div");
  top.classList.add("top-div");
  form.appendChild(top);
  top.appendChild(title(task.title));
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("form-date-container");
  top.appendChild(dateContainer);
  dateContainer.appendChild(priority(task.priority));
  dateContainer.appendChild(date(task.date));
  form.appendChild(subtasks(task.subtask1, task.subtask2));
  const bottom = document.createElement("div");
  bottom.classList.add("bot-div");
  form.appendChild(bottom);
  bottom.appendChild(description(task.description));
  bottom.appendChild(notes(task.notes));
  form.appendChild(button());
  return container;
};

export { editTask };
