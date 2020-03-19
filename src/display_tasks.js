const tasks = projectName => {
  const div = document.createElement("div");
  const project = JSON.parse(window.localStorage.getItem(projectName));
  const task = project.tasks;
  for (let i = 0; i < project.tasks.length; i++) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-tab-div");
    div.appendChild(taskDiv);
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("task-tab-date");
    taskDiv.appendChild(dateDiv);
    const date = document.createElement("div");
    date.classList.add("task-date");
    date.innerHTML = `${task[i].date}`;
    dateDiv.appendChild(date);
    const tabandCheck = document.createElement("div");
    tabandCheck.classList.add("tab-check-delete");
    taskDiv.appendChild(tabandCheck);
    const tab = document.createElement("div");
    tab.classList.add("tabs");
    tab.classList.add("task-tab");
    tabandCheck.appendChild(tab);
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "task-tabs";
    input.id = `${task[i].title}`;
    tab.appendChild(input);
    const label = document.createElement("label");
    label.innerHTML = `${task[i].title}`;
    label.htmlFor = `${task[i].title}`;
    tab.appendChild(label);
    const checkAndDel = document.createElement("div");
    checkAndDel.classList.add("check-delete");
    tabandCheck.appendChild(checkAndDel);
    const checkBut = document.createElement("button");
    checkBut.classList.add("check-button");
    checkBut.innerHTML = "&#x2713;";
    checkBut.dataset.value = `${i}`;
    checkAndDel.appendChild(checkBut);
    const delBut = document.createElement("button");
    delBut.classList.add("delete-button");
    delBut.innerHTML = "&#x2715;";
    delBut.dataset.value = `${i}`;
    checkAndDel.appendChild(delBut);
    switch (task[i].priority) {
      case "Low":
        dateDiv.style.backgroundColor = "#2CD5C4";
        break;

      case "Medium":
        dateDiv.style.backgroundColor = "#365ABD";
        break;

      case "High":
        dateDiv.style.backgroundColor = "#FB637E";
        break;
    }
    switch (task[i].completed) {
      case "true":
        tabandCheck.classList.add("completed");
        break;

      case "false":
        if (tabandCheck.classList.contains("completed"))
        tabandCheck.style.classList.remove("completed");
        break;
    }
  }
  return div;
};

export { tasks };
