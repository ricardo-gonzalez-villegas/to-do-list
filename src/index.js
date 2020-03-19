"use strict";

import { loadPage } from "./homepage.js";
import { task } from "./task_constructor.js";
import { tasks } from "./display_tasks.js";
import { project, addToProject } from "./project_constructor.js";
import { showForm, showEdit } from "./show.js";
import { projects } from "./display_projects.js";
import { displayTask } from "./display_task.js";
import { editTask } from "./edit_form.js";

const defaultProject = new project("Default");

if (window.localStorage.length == 0) {
  window.localStorage.setItem(
    `${defaultProject.name}`,
    JSON.stringify(defaultProject)
  );

  const title = 'Task 1';
  const priority = 'Low'
  const date = '2020-03-19'
  const subtask1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const subtask2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus non massa ornare elementum nec sit amet tortor. Nulla finibus convallis sem, at vehicula neque venenatis eget. Nulla lobortis euismod purus non eleifend. Aenean volutpat sollicitudin ex scelerisque faucibus. Duis bibendum pharetra tristique. ';
  const notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus non massa ornare elementum nec sit amet tortor. Nulla finibus convallis sem, at vehicula neque venenatis eget. Nulla lobortis euismod purus non eleifend. Aenean volutpat sollicitudin ex scelerisque faucibus. Duis bibendum pharetra tristique. ';
  const selection = 'Default';
  const newTask = new task(
    title,
    priority,
    date,
    subtask1,
    subtask2,
    description,
    notes
  );
  addToProject(selection, newTask);

  const title2 = 'Task 2';
  const priority2 = 'Medium'
  const date2 = '2020-03-25'
  const newTask2 = new task(
    title2,
    priority2,
    date2,
    subtask1,
    subtask2,
    description,
    notes
  );
  addToProject(selection, newTask2);

  const title3 = 'Task 3';
  const priority3 = 'High'
  const date3 = '2020-04-10'
  const newTask3 = new task(
    title3,
    priority3,
    date3,
    subtask1,
    subtask2,
    description,
    notes
  );
  addToProject(selection, newTask3);

}

document.body.appendChild(loadPage());

const taskButton = document.getElementById("task-button");

taskButton.addEventListener("click", function() {
  showForm();
});

const taskForm = document.getElementById("form");

taskForm.addEventListener("submit", function(event) {
  const title = form.querySelector('input[id="title"]').value;
  const priority = form.querySelector('select[id="priority"]').value;
  const date = form.querySelector('input[id="date"]').value;
  const subtask1 = form.querySelector('input[id="subtask1"]').value;
  const subtask2 = form.querySelector('input[id="subtask2"]').value;
  const description = form.querySelector('textarea[id="description"]').value;
  const notes = form.querySelector('textarea[id="notes"]').value;
  const selection = form.querySelector("select[id=project-select]").value;
  if (title == "") return;
  const newTask = new task(
    title,
    priority,
    date,
    subtask1,
    subtask2,
    description,
    notes
  );
  addToProject(selection, newTask);
  taskForm.reset();
  document.querySelector("#date").valueAsDate = new Date();
  showForm();
});

const projectForm = document.getElementById("project-form");
const projectsContainer = document.querySelector(".projects-container");
const select = document.getElementById("project-select");
const projectsTitle = document.querySelector(".projects-title");

projectForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const title = projectForm.querySelector('input[id="project-title"]').value;
  if (title.length == 0 || title == "" || !title.trim()) {
    projectForm.reset();
    return;
  }
  const newProject = new project(`${title}`);
  window.localStorage.setItem(`${newProject.name}`, JSON.stringify(newProject));
  projectsTitle.innerHTML = `Projects ( ${window.localStorage.length} )`;
  projectForm.reset();
  projectsContainer.innerHTML = "";
  projectsContainer.appendChild(projects());
  select.options.length = 0;
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(
      window.localStorage.getItem(localStorage.key(i))
    );
    const option = document.createElement("option");
    option.value = `${project.name}`;
    option.innerHTML = `${project.name}`;
    select.appendChild(option);
  }
  addProjectFunctions();
});

const addProjectFunctions = () => {
  const tabs = document.querySelectorAll(".project-tab");
  const taskList = document.querySelector(".task-list-container");
  const taskContainer = document.querySelector(".task-container");
  const tasksContainer = document.createElement("div");
  tasksContainer.classList.add("tasks-container");

  tabs.forEach(tab => {
    tab.addEventListener("change", event => {
      const currentProject = event.target.id;
      taskList.innerHTML = "";
      taskContainer.innerHTML = "";
      tasksContainer.innerHTML = "";
      const div = document.createElement("div");
      div.classList.add("task-list-title-container");
      taskList.appendChild(div);
      const title = document.createElement("div");
      title.classList.add("task-list-title");
      title.innerHTML = currentProject;
      div.appendChild(title);
      const delContainer = document.createElement("div");
      delContainer.classList.add("project-delete-container");
      div.appendChild(delContainer);
      const del = document.createElement("button");
      del.classList.add("delete-button");
      del.addEventListener("click", event => {
        event.preventDefault();
        taskList.innerHTML = "";
        taskContainer.innerHTML = "";
        delProject(currentProject);
      });
      del.innerHTML = "&#x2715;";
      delContainer.appendChild(del);
      taskList.appendChild(tasksContainer);
      tasksContainer.appendChild(tasks(currentProject));
      const deleteButtons = document.querySelectorAll(".delete-button");
      deleteButtons.forEach(delBut => {
        delBut.addEventListener("click", event => {
          delTask(event.target.dataset.value, currentProject);
          event.target.parentNode.parentNode.parentNode.remove();
        });
      });
      const checkButtons = document.querySelectorAll(".check-button");
      checkButtons.forEach(chkBut => {
        chkBut.addEventListener("click", event => {
          completeTask(event.target.dataset.value, currentProject);
          event.target.parentNode.parentNode.classList.toggle("completed");
        });
      });
      taskTabs(currentProject);
    });
  });
};

addProjectFunctions();

const taskTabs = currentProject => {
  const taskContainer = document.querySelector(".task-container");
  const taskTab = document.querySelectorAll(".task-tab");
  taskTab.forEach(tasktab => {
    tasktab.addEventListener("change", event => {
      const currentTask = event.target.id;
      taskContainer.innerHTML = "";
      const selectedProject = JSON.parse(
        window.localStorage.getItem(currentProject)
      );
      for (let i = 0; i < selectedProject.tasks.length; i++) {
        if (selectedProject.tasks[i].title === currentTask) {
          taskContainer.appendChild(displayTask(selectedProject.tasks[i]));

          const edit = document.querySelector(".edit");
          edit.addEventListener("click", event => {
            event.preventDefault();
            const container = document.querySelector(".display");
            container.appendChild(editTask(selectedProject.tasks[i]));
            showEdit();
            const editForm = document.getElementById("edit-form");
            editForm.addEventListener("submit", function(event) {
              const title = document.querySelector("#edit-title").value;
              const priority = document.querySelector("#edit-priority").value;
              const date = document.querySelector("#edit-date").value;
              const subtask1 = document.querySelector("#edit-subtask1").value;
              const subtask2 = document.querySelector("#edit-subtask2").value;
              const description = document.querySelector("#edit-description")
                .value;
              const notes = document.querySelector("#edit-notes").value;
              if (title == "") return;
              const project = JSON.parse(
                window.localStorage.getItem(selectedProject.name)
              );
              project.tasks[i].title = title;
              project.tasks[i].priority = priority;
              project.tasks[i].date = date;
              project.tasks[i].subtask1 = subtask1;
              project.tasks[i].subtask2 = subtask2;
              project.tasks[i].description = description;
              project.tasks[i].notes = notes;
              window.localStorage.setItem(
                `${project.name}`,
                JSON.stringify(project)
              );
            });
          });

          const chkButs = document.querySelectorAll(".check-button-subtask");
          chkButs.forEach(chkBut => {
            chkBut.addEventListener("click", event => {
              event.target.parentNode.parentNode.firstChild.classList.toggle(
                "completed"
              );
              completeSubtask(
                i,
                selectedProject.name,
                event.target.dataset.value
              );
            });
          });
        }
      }
    });
  });
};

const delProject = projectID => {
  window.localStorage.removeItem(projectID);
  projectsTitle.innerHTML = `Projects ( ${window.localStorage.length} )`;
  projectsContainer.innerHTML = "";
  projectsContainer.appendChild(projects());
  select.options.length = 0;
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(
      window.localStorage.getItem(localStorage.key(i))
    );
    const option = document.createElement("option");
    option.value = `${project.name}`;
    option.innerHTML = `${project.name}`;
    select.appendChild(option);
  }
  addProjectFunctions();
  taskTabs();
};

const delTask = (index, projectName) => {
  const project = JSON.parse(window.localStorage.getItem(projectName));
  const task = project.tasks;
  task.splice(index, 1);
  updateTasks(project.name, task);
};

const completeTask = (index, projectName) => {
  const project = JSON.parse(window.localStorage.getItem(projectName));
  project.tasks[index].completed == "false"
    ? (project.tasks[index].completed = "true")
    : (project.tasks[index].completed = "false");
  window.localStorage.setItem(`${project.name}`, JSON.stringify(project));
};

const updateTasks = (selection, tasks) => {
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(
      window.localStorage.getItem(localStorage.key(i))
    );
    if (project.name == selection) {
      project.tasks = tasks;
      window.localStorage.setItem(`${project.name}`, JSON.stringify(project));
    }
  }
};

const completeSubtask = (index, projectName, subtask) => {
  const project = JSON.parse(window.localStorage.getItem(projectName));
  if (subtask == "subtask1") {
    project.tasks[index].subtask1Completed == false
      ? (project.tasks[index].subtask1Completed = true)
      : (project.tasks[index].subtask1Completed = false);
  } else {
    project.tasks[index].subtask2Completed == false
      ? (project.tasks[index].subtask2Completed = true)
      : (project.tasks[index].subtask2Completed = false);
  }

  window.localStorage.setItem(`${project.name}`, JSON.stringify(project));
};
