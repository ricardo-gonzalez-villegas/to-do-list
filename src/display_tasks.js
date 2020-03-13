const tasks = (projectName) => {
  const div = document.createElement("div");
  const project = JSON.parse(
    window.localStorage.getItem(projectName)
  );
  const task = project.tasks;
  for (let i = 0; i < project.tasks.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("task-tab");
    div.appendChild(tab);
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "task-tabs";
    input.id = `${task[i].title}`;
    tab.appendChild(input);
    const label = document.createElement("label");
    label.innerHTML = `${task[i].title}`;
    label.htmlFor = `${task[i].title}`;
    tab.appendChild(label);
  };
  return div;
};

export { tasks };
