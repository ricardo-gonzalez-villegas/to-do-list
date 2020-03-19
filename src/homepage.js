"use strict";

import { addTask, addProject } from "./forms.js";
import { projects } from "./display_projects.js";

const nav = () => {
  const container = document.createElement("div");
  container.classList.add("nav");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  const task = document.createElement("button");
  task.id = "task-button";
  task.classList.add("home-task");
  task.innerHTML = "+ Task";
  homeContainer.appendChild(task);
  container.appendChild(homeContainer);
  const title = document.createElement("div");
  title.classList.add("home-title");
  title.innerHTML = "Organizer";
  container.appendChild(title);
  return container;
};

const sideBar = () => {
  const container = document.createElement("div");
  container.classList.add("side-bar");
  const titleContainer = document.createElement("div");
  container.appendChild(titleContainer);
  titleContainer.classList.add("projects-title-container");
  const title = document.createElement("div");
  title.classList.add("projects-title");
  title.innerHTML = `Projects ( ${window.localStorage.length} )`;
  titleContainer.append(title);
  container.appendChild(addProject());
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects-container");
  container.appendChild(projectsContainer);
  projectsContainer.appendChild(projects());
  return container;
};

const taskListContainer = () => {
  const div = document.createElement("div");
  div.id = "task-list-container";
  div.classList.add("task-list-container");
  return div;
};

const taskContainer = () => {
  const div = document.createElement("div");
  div.classList.add("task-container");
  return div;
};

const display = () => {
  const container = document.createElement("div");
  container.classList.add("display");
  container.appendChild(addTask());
  container.appendChild(taskListContainer());
  container.appendChild(taskContainer());
  return container;
};

const loadPage = () => {
  const container = document.createElement("div");
  container.id = "content";
  container.appendChild(nav());
  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(sideBar());
  main.appendChild(display());
  container.appendChild(main);
  return container;
};

export { loadPage };
