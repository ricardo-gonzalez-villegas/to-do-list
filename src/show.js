"use strict";

const showForm = () => {
  const panel = document.querySelector(".form");
  const task = document.querySelector(".task-container");
  const taskButton = document.querySelector(".home-task");
  const taskList = document.querySelector(".task-list-container");
  document.querySelector("#date").valueAsDate = new Date();

  function showDisplay() {
    if (panel.style.width) {
      task.style.display = "none";
      taskList.style.display = "none";
    } else {
      task.style.display = "flex";
      taskList.style.display = "flex";
    }
  }

  if (panel.style.width) {
    panel.style.width = null;
    taskButton.innerHTML = "+ Task";
    panel.addEventListener("transitionend", showDisplay);
  } else {
    taskList.style.display = "none";
    task.style.display = "none";
    taskButton.innerHTML = "+ Hide";
    panel.style.width = "100%";
  }
};

const showEdit = () => {
  const panel = document.querySelector(".edit-form");
  const task = document.querySelector(".task-container");
  const taskButton = document.querySelector(".home-task");
  const taskList = document.querySelector(".task-list-container");

  function showDisplay() {
    if (panel.style.width) {
      task.style.display = "none";
      taskList.style.display = "none";
    } else {
      task.style.display = "flex";
      taskList.style.display = "flex";
    }
  }

  if (panel.style.width) {
    panel.style.width = null;
    taskButton.innerHTML = "+ Task";
    panel.addEventListener("transitionend", showDisplay);
  } else {
    taskList.style.display = "none";
    task.style.display = "none";
    taskButton.innerHTML = "+ Hide";
    panel.style.width = "100%";
  }
};

export { showForm, showEdit };
