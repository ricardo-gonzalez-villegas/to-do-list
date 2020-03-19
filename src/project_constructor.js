"use task";

function project(name){
  this.name = name;
  this.tasks = [];
};

const addToProject = (selection, task) => {
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
    if (project.name == selection) {
      project.tasks.push(task);
      window.localStorage.setItem(`${project.name}`, JSON.stringify(project));
    }
  }
};

export { project, addToProject };
