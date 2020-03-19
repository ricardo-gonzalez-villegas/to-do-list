const projects = () => {
  const div = document.createElement("div");
  for (let i = 0; i < window.localStorage.length; i++) {
    const project = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
    const tab = document.createElement("div");
    tab.classList.add('tabs');
    tab.classList.add("project-tab");
    div.appendChild(tab);
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "project-tabs";
    input.id = `${project.name}`;
    tab.appendChild(input);
    const label = document.createElement("label");
    label.innerHTML = `${project.name} ( ${project.tasks.length} )`;
    label.htmlFor = `${project.name}`;
    tab.appendChild(label);
  }
  return div;
};

export { projects };
