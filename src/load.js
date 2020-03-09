"use strict";

import { displayTask } from "./task.js"

const nav = () => {
  const container = document.createElement("div");
  container.classList.add("nav");
  const homeContainer = document.createElement("div");
  const home = document.createElement("div");
  home.innerHTML = "&#9751";
  homeContainer.appendChild(home);
  const newTask = document.createElement("div");
  newTask.innerHTML = "+ New";
  homeContainer.appendChild(newTask);
  container.appendChild(homeContainer);
  const title = document.createElement("div");
  title.innerHTML = "To Do";
  container.appendChild(title);
  return container;
};

const sideBar = () => {
  const container = document.createElement("div");
  container.classList.add("side-bar");
  return container;
};

const display = () => {
  const container = document.createElement("div");
  container.classList.add("display");
  const list = document.createElement('div');
  list.classList.add('list-container');
  container.appendChild(list);
  const task = document.createElement('div');
  task.appendChild(displayTask());
  task.classList.add('task-container');
  container.appendChild(task);
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
