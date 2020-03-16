"use strict";

const title = () => {
  const div = document.createElement("div");
  div.classList.add("input-div");
  const label = document.createElement("label");
  label.for = "title";
  label.innerHTML = "Title";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("input");
  input.id = "title";
  input.name = "title";
  input.type = "text";
  input.maxLength = 40;
  input.placeholder = "Title...";
  div.appendChild(input);
  return div;
};

const priority = () => {
  const div = document.createElement("div");
  div.classList.add("priority-div");
  const label = document.createElement("label");
  label.for = "priority";
  label.innerHTML = "Priority";
  div.appendChild(label);
  const select = document.createElement("select");
  select.id = "priority";
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
  return div;
};

const date = () => {
  const div = document.createElement("div");
  div.classList.add("date-div");
  const label = document.createElement("label");
  label.for = "date";
  label.innerHTML = "Due";
  div.appendChild(label);
  div.appendChild(document.createElement("br"));
  const input = document.createElement("input");
  input.placeholder = new Date();
  input.id = "date";
  input.name = "date";
  input.type = "date";
  div.appendChild(input);
  return div;
};

const subtasks = () => {
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
  input1.id = "subtask1";
  input1.name = "subtask1";
  input1.type = "text";
  input1.placeholder = "Subtask...";
  input1.maxLength = 50;
  input1.size = 50;
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
  input2.id = "subtask2";
  input2.name = "subtask2";
  input2.type = "text";
  input2.placeholder = "Subtask...";
  input2.maxLength = 50;
  input2.size = 50;
  subtask2.appendChild(input2);
  return div;
};

const description = () => {
  const div = document.createElement("div");
  div.classList.add("description-div");
  const label = document.createElement("label");
  label.for = "description";
  label.innerHTML = "Description";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("textarea");
  input.id = "description";
  input.name = "description";
  input.placeholder = "Description";
  input.rows = 5;
  input.maxLength = 300;
  div.appendChild(input);
  return div;
};

const notes = () => {
  const div = document.createElement("div");
  div.classList.add("notes-div");
  const label = document.createElement("label");
  label.for = "noes";
  label.innerHTML = "Notes";
  label.appendChild(document.createElement("br"));
  div.appendChild(label);
  const input = document.createElement("textarea");
  input.id = "notes";
  input.name = "notes";
  input.placeholder = "Notes";
  input.rows = 5;
  input.maxLength = 300;
  div.appendChild(input);
  return div;
};

const projects = () => {
  const div = document.createElement("div");
  div.classList.add("project-div");
  const label = document.createElement("label");
  label.for = "project-select";
  label.innerHTML = "Project";
  div.appendChild(label);
  const select = document.createElement("select");
  select.id = "project-select";
  select.name = "project-select";
  div.appendChild(select);
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
    const option = document.createElement("option");
    option.value = `${project.name}`;
    option.innerHTML = `${project.name}`;
    select.appendChild(option);
  }
  return div;
};

const button = () => {
  const button = document.createElement("button");
  button.id = "form-button";
  button.classList.add("form-button");
  button.innerHTML = "Submit";
  return button;
};

const addTask = () => {
  const container = document.createElement("div");
  container.classList.add("form");
  const form = document.createElement("form");
  form.id = "form";
  container.appendChild(form);
  form.appendChild(projects());
  const top = document.createElement("div");
  top.classList.add("top-div");
  form.appendChild(top);
  top.appendChild(title());
  const dateContainer = document.createElement('div');
  dateContainer.classList.add('form-date-container');
  top.appendChild(dateContainer);
  dateContainer.appendChild(priority());
  dateContainer.appendChild(date());
  form.appendChild(subtasks());
  const bottom = document.createElement("div");
  bottom.classList.add("bot-div");
  form.appendChild(bottom);
  bottom.appendChild(description());
  bottom.appendChild(notes());
  form.appendChild(button());
  return container;
};




const addProject = () => {
  const container = document.createElement("div");
  container.classList.add("project-form");
  const form = document.createElement("form");
  form.id = "project-form";
  container.appendChild(form);
  const input = document.createElement("input");
  input.id = "project-title";
  input.name = "project-title";
  input.type = "text";
  input.maxLength = 20;
  input.placeholder = "Title...";
  form.appendChild(input);
  const button = document.createElement("button");
  button.id = "project-button";
  button.classList.add("project-button");
  button.innerHTML = "+";
  form.appendChild(button);
  return container;
};


export { addTask, addProject };
