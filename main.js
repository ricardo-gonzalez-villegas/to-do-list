!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{const e=document.createElement("div");e.classList.add("form");const t=document.createElement("form");t.id="form",e.appendChild(t),t.appendChild((()=>{const e=document.createElement("div");e.classList.add("project-div");const t=document.createElement("label");t.for="project-select",t.innerHTML="Project",e.appendChild(t);const n=document.createElement("select");n.id="project-select",n.name="project-select",e.appendChild(n);for(let e=0;e<window.localStorage.length;e++){const t=JSON.parse(window.localStorage.getItem(localStorage.key(e))),a=document.createElement("option");a.value=`${t.name}`,a.innerHTML=`${t.name}`,n.appendChild(a)}return e})());const n=document.createElement("div");n.classList.add("top-div"),t.appendChild(n),n.appendChild((()=>{const e=document.createElement("div");e.classList.add("input-div");const t=document.createElement("label");t.for="title",t.innerHTML="Title",t.appendChild(document.createElement("br")),e.appendChild(t);const n=document.createElement("input");return n.id="title",n.name="title",n.type="text",n.maxLength=30,n.placeholder="Title...",e.appendChild(n),e})());const a=document.createElement("div");a.classList.add("form-date-container"),n.appendChild(a),a.appendChild((()=>{const e=document.createElement("div");e.classList.add("priority-div");const t=document.createElement("label");t.for="priority",t.innerHTML="Priority",e.appendChild(t);const n=document.createElement("select");n.id="priority",n.name="priority";const a=document.createElement("option");a.value="Low",a.innerHTML="Low",n.appendChild(a);const d=document.createElement("option");d.value="Medium",d.innerHTML="Medium",n.appendChild(d);const s=document.createElement("option");return s.value="High",s.innerHTML="High",n.appendChild(s),e.appendChild(n),e})()),a.appendChild((()=>{const e=document.createElement("div");e.classList.add("date-div");const t=document.createElement("label");t.for="date",t.innerHTML="Due",e.appendChild(t),e.appendChild(document.createElement("br"));const n=document.createElement("input");return n.placeholder=new Date,n.id="date",n.name="date",n.type="date",e.appendChild(n),e})()),t.appendChild((()=>{const e=document.createElement("div");e.classList.add("form-subs");const t=document.createElement("div");t.classList.add("subtask1"),t.classList.add("form-sub"),e.appendChild(t);const n=document.createElement("label");n.for="subtask1",n.innerHTML="Subtask",t.appendChild(n),t.appendChild(document.createElement("br"));const a=document.createElement("input");a.id="subtask1",a.name="subtask1",a.type="text",a.placeholder="Subtask...",a.maxLength=30,a.size=30,t.appendChild(a);const d=document.createElement("div");d.classList.add("subtask2"),d.classList.add("form-sub"),e.appendChild(d);const s=document.createElement("label");s.for="subtask2",s.innerHTML="Subtask",d.appendChild(s),d.appendChild(document.createElement("br"));const i=document.createElement("input");return i.id="subtask2",i.name="subtask2",i.type="text",i.placeholder="Subtask...",i.maxLength=30,i.size=30,d.appendChild(i),e})());const d=document.createElement("div");return d.classList.add("bot-div"),t.appendChild(d),d.appendChild((()=>{const e=document.createElement("div");e.classList.add("description-div");const t=document.createElement("label");t.for="description",t.innerHTML="Description",t.appendChild(document.createElement("br")),e.appendChild(t);const n=document.createElement("textarea");return n.id="description",n.name="description",n.placeholder="Description...",n.rows=5,n.maxLength=300,e.appendChild(n),e})()),d.appendChild((()=>{const e=document.createElement("div");e.classList.add("notes-div");const t=document.createElement("label");t.for="noes",t.innerHTML="Notes",t.appendChild(document.createElement("br")),e.appendChild(t);const n=document.createElement("textarea");return n.id="notes",n.name="notes",n.placeholder="Notes...",n.rows=5,n.maxLength=300,e.appendChild(n),e})()),t.appendChild((()=>{const e=document.createElement("button");return e.id="form-button",e.classList.add("form-button"),e.innerHTML="Submit",e})()),e},d=()=>{const e=document.createElement("div");for(let t=0;t<window.localStorage.length;t++){const n=JSON.parse(window.localStorage.getItem(localStorage.key(t))),a=document.createElement("div");a.classList.add("tabs"),a.classList.add("project-tab"),e.appendChild(a);const d=document.createElement("input");d.type="radio",d.name="project-tabs",d.id=`${n.name}`,a.appendChild(d);const s=document.createElement("label");s.innerHTML=`${n.name} ( ${n.tasks.length} )`,s.htmlFor=`${n.name}`,a.appendChild(s)}return e},s=()=>{const e=document.createElement("div");e.classList.add("side-bar");const t=document.createElement("div");e.appendChild(t),t.classList.add("projects-title-container");const n=document.createElement("div");n.classList.add("projects-title"),n.innerHTML=`Projects ( ${window.localStorage.length} )`,t.append(n),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("project-form");const t=document.createElement("form");t.id="project-form",e.appendChild(t);const n=document.createElement("input");n.id="project-title",n.name="project-title",n.type="text",n.maxLength=20,n.placeholder="Title...",t.appendChild(n);const a=document.createElement("button");return a.id="project-button",a.classList.add("project-button"),a.innerHTML="+",t.appendChild(a),e})());const a=document.createElement("div");return a.classList.add("projects-container"),e.appendChild(a),a.appendChild(d()),e},i=()=>{const e=document.createElement("div");return e.classList.add("display"),e.appendChild(a()),e.appendChild((()=>{const e=document.createElement("div");return e.id="task-list-container",e.classList.add("task-list-container"),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("task-container"),e})()),e};function o(e,t,n,a,d,s,i){this.title=e,this.priority=t,this.date=n,this.subtask1=a,this.subtask2=d,this.description=s,this.notes=i,this.subtask1Completed=!1,this.subtask2Completed=!1,this.completed=!1}function c(e){this.name=e,this.tasks=[]}const l=(e,t)=>{for(let n=0;n<window.localStorage.length;n++){const a=JSON.parse(window.localStorage.getItem(localStorage.key(n)));a.name==e&&(a.tasks.push(t),window.localStorage.setItem(`${a.name}`,JSON.stringify(a)))}},r=()=>{const e=document.querySelector(".form"),t=document.querySelector(".task-container"),n=document.querySelector(".home-task"),a=document.querySelector(".task-list-container");document.querySelector("#date").valueAsDate=new Date,e.style.width?(e.style.width=null,n.innerHTML="+ Task",e.addEventListener("transitionend",(function(){e.style.width?(t.style.display="none",a.style.display="none"):(t.style.display="flex",a.style.display="flex")}))):(a.style.display="none",t.style.display="none",n.innerHTML="+ Hide",e.style.width="100%")},u=()=>{const e=document.querySelector(".edit-form"),t=document.querySelector(".task-container"),n=document.querySelector(".home-task"),a=document.querySelector(".task-list-container");e.style.width?(e.style.width=null,n.innerHTML="+ Task",e.addEventListener("transitionend",(function(){e.style.width?(t.style.display="none",a.style.display="none"):(t.style.display="flex",a.style.display="flex")}))):(a.style.display="none",t.style.display="none",n.innerHTML="+ Hide",e.style.width="100%")},m=e=>{const t=document.createElement("div");t.classList.add("task"),t.appendChild((e=>{const t=document.createElement("div");t.classList.add("task-title-container");const n=document.createElement("div");n.classList.add("task-title"),n.innerHTML=e,t.appendChild(n);const a=document.createElement("button");return a.classList.add("edit"),a.innerHTML="Edit",t.appendChild(a),t})(e.title));const n=document.createElement("div");n.classList.add("date-priority"),n.appendChild((e=>{const t=document.createElement("div");return t.innerHTML=`<span>Due:</span> ${e}`,t.classList.add("due-date"),t})(e.date)),n.appendChild((e=>{const t=document.createElement("div");return t.innerHTML=`<span>Priority:</span> ${e}`,t.classList.add("priority"),t})(e.priority)),t.appendChild(n),t.appendChild((e=>{const t=document.createElement("div");t.classList.add("description-container");const n=document.createElement("div");n.classList.add("description-title"),n.innerHTML="Description",t.appendChild(n);const a=document.createElement("div");return a.classList.add("description"),a.innerHTML=`${e}`,t.appendChild(a),t})(e.description));const a=document.createElement("div");return a.classList.add("sub-container"),a.appendChild((()=>{const e=document.createElement("div");return e.classList.add("sub-title"),e.innerHTML="Subtasks",e})()),0==!e.subtask1.length&&a.appendChild(((e,t)=>{const n=document.createElement("div");n.classList.add("sub-task");const a=document.createElement("div");a.classList.add("display-sub-task"),n.appendChild(a),a.innerHTML=`${e}`;const d=document.createElement("div");d.classList.add("check-div"),n.appendChild(d);const s=document.createElement("button");switch(s.classList.add("check-button-subtask"),s.dataset.value="subtask1",s.innerHTML="&#x2713;",d.appendChild(s),t){case!0:a.classList.add("completed");break;case!1:a.classList.contains("completed")&&a.style.classList.remove("completed")}return n})(e.subtask1,e.subtask1Completed)),0==!e.subtask2.length&&a.appendChild(((e,t)=>{const n=document.createElement("div");n.classList.add("sub-task");const a=document.createElement("div");a.classList.add("display-sub-task"),n.appendChild(a),a.innerHTML=`${e}`;const d=document.createElement("div");d.classList.add("check-div"),n.appendChild(d);const s=document.createElement("button");switch(s.classList.add("check-button-subtask"),s.dataset.value="subtask2",s.innerHTML="&#x2713;",d.appendChild(s),t){case!0:a.classList.add("completed");break;case!1:a.classList.contains("completed")&&a.style.classList.remove("completed")}return n})(e.subtask2,e.subtask2Completed)),t.appendChild(a),t.appendChild((e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("div");n.classList.add("notes-title"),n.innerHTML="Notes",t.appendChild(n);const a=document.createElement("div");return a.classList.add("notes"),a.innerHTML=`${e}`,t.appendChild(a),t})(e.notes)),t},p=e=>{const t=document.createElement("div");t.classList.add("edit-form");const n=document.createElement("form");n.id="edit-form",t.appendChild(n);const a=document.createElement("div");a.classList.add("top-div"),n.appendChild(a),a.appendChild((e=>{const t=document.createElement("div");t.classList.add("input-div");const n=document.createElement("label");n.for="title",n.innerHTML="Title",n.appendChild(document.createElement("br")),t.appendChild(n);const a=document.createElement("input");return a.id="edit-title",a.name="title",a.type="text",a.maxLength=30,a.value=`${e}`,t.appendChild(a),t})(e.title));const d=document.createElement("div");d.classList.add("form-date-container"),a.appendChild(d),d.appendChild((e=>{const t=document.createElement("div");t.classList.add("priority-div");const n=document.createElement("label");n.for="priority",n.innerHTML="Priority",t.appendChild(n);const a=document.createElement("select");a.id="edit-priority",a.name="priority";const d=document.createElement("option");d.value="Low",d.innerHTML="Low",a.appendChild(d);const s=document.createElement("option");s.value="Medium",s.innerHTML="Medium",a.appendChild(s);const i=document.createElement("option");switch(i.value="High",i.innerHTML="High",a.appendChild(i),t.appendChild(a),e){case"Low":d.selected=!0;break;case"Medium":s.selected=!0;break;case"High":i.selected=!0}return t})(e.priority)),d.appendChild((e=>{const t=document.createElement("div");t.classList.add("date-div");const n=document.createElement("label");n.for="date",n.innerHTML="Due",t.appendChild(n),t.appendChild(document.createElement("br"));const a=document.createElement("input");return a.value=e,a.id="edit-date",a.name="date",a.type="date",t.appendChild(a),t})(e.date)),n.appendChild(((e,t)=>{const n=document.createElement("div");n.classList.add("form-subs");const a=document.createElement("div");a.classList.add("subtask1"),a.classList.add("form-sub"),n.appendChild(a);const d=document.createElement("label");d.for="subtask1",d.innerHTML="Subtask",a.appendChild(d),a.appendChild(document.createElement("br"));const s=document.createElement("input");s.id="edit-subtask1",s.name="subtask1",s.type="text",s.value=e,s.maxLength=20,s.size=20,a.appendChild(s);const i=document.createElement("div");i.classList.add("subtask2"),i.classList.add("form-sub"),n.appendChild(i);const o=document.createElement("label");o.for="subtask2",o.innerHTML="Subtask",i.appendChild(o),i.appendChild(document.createElement("br"));const c=document.createElement("input");return c.id="edit-subtask2",c.name="subtask2",c.type="text",c.value=t,c.maxLength=30,c.size=30,i.appendChild(c),n})(e.subtask1,e.subtask2));const s=document.createElement("div");return s.classList.add("bot-div"),n.appendChild(s),s.appendChild((e=>{const t=document.createElement("div");t.classList.add("description-div");const n=document.createElement("label");n.for="description",n.innerHTML="Description",n.appendChild(document.createElement("br")),t.appendChild(n);const a=document.createElement("textarea");return a.id="edit-description",a.name="description",a.value=e,a.rows=5,a.maxLength=300,t.appendChild(a),t})(e.description)),s.appendChild((e=>{const t=document.createElement("div");t.classList.add("notes-div");const n=document.createElement("label");n.for="noes",n.innerHTML="Notes",n.appendChild(document.createElement("br")),t.appendChild(n);const a=document.createElement("textarea");return a.id="edit-notes",a.name="notes",a.value=e,a.rows=5,a.maxLength=300,t.appendChild(a),t})(e.notes)),n.appendChild((()=>{const e=document.createElement("button");return e.id="edit-form-button",e.classList.add("form-button"),e.innerHTML="Submit",e})()),t},h=new c("Default");if(0==window.localStorage.length){window.localStorage.setItem(`${h.name}`,JSON.stringify(h));const e="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",t="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",n="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus non massa ornare elementum nec sit amet tortor. Nulla finibus convallis sem, at vehicula neque venenatis eget. Nulla lobortis euismod purus non eleifend. Aenean volutpat sollicitudin ex scelerisque faucibus. Duis bibendum pharetra tristique. ",a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed purus non massa ornare elementum nec sit amet tortor. Nulla finibus convallis sem, at vehicula neque venenatis eget. Nulla lobortis euismod purus non eleifend. Aenean volutpat sollicitudin ex scelerisque faucibus. Duis bibendum pharetra tristique. ",d="Default",s=new o("Task 1","Low","2020-03-19",e,t,n,a);l(d,s);const i=new o("Task 2","Medium","2020-03-25",e,t,n,a);l(d,i);const c=new o("Task 3","High","2020-04-10",e,t,n,a);l(d,c)}document.body.appendChild((()=>{const e=document.createElement("div");e.id="content",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("nav");const t=document.createElement("div");t.classList.add("home-container");const n=document.createElement("button");n.id="task-button",n.classList.add("home-task"),n.innerHTML="+ Task",t.appendChild(n),e.appendChild(t);const a=document.createElement("div");return a.classList.add("home-title"),a.innerHTML="Organizer",e.appendChild(a),e})());const t=document.createElement("div");return t.classList.add("main"),t.appendChild(s()),t.appendChild(i()),e.appendChild(t),e})()),document.getElementById("task-button").addEventListener("click",(function(){r()}));const L=document.getElementById("form");L.addEventListener("submit",(function(e){const t=form.querySelector('input[id="title"]').value,n=form.querySelector('select[id="priority"]').value,a=form.querySelector('input[id="date"]').value,d=form.querySelector('input[id="subtask1"]').value,s=form.querySelector('input[id="subtask2"]').value,i=form.querySelector('textarea[id="description"]').value,c=form.querySelector('textarea[id="notes"]').value,u=form.querySelector("select[id=project-select]").value;if(""==t)return;const m=new o(t,n,a,d,s,i,c);l(u,m),L.reset(),document.querySelector("#date").valueAsDate=new Date,r()}));const b=document.getElementById("project-form"),v=document.querySelector(".projects-container"),E=document.getElementById("project-select"),C=document.querySelector(".projects-title");b.addEventListener("submit",(function(e){e.preventDefault();const t=b.querySelector('input[id="project-title"]').value;if(0==t.length||""==t||!t.trim())return void b.reset();const n=new c(`${t}`);window.localStorage.setItem(`${n.name}`,JSON.stringify(n)),C.innerHTML=`Projects ( ${window.localStorage.length} )`,b.reset(),v.innerHTML="",v.appendChild(d()),E.options.length=0;for(let e=0;e<window.localStorage.length;e++){const t=JSON.parse(window.localStorage.getItem(localStorage.key(e))),n=document.createElement("option");n.value=`${t.name}`,n.innerHTML=`${t.name}`,E.appendChild(n)}k()}));const k=()=>{const e=document.querySelectorAll(".project-tab"),t=document.querySelector(".task-list-container"),n=document.querySelector(".task-container"),a=document.createElement("div");a.classList.add("tasks-container"),e.forEach(e=>{e.addEventListener("change",e=>{const d=e.target.id;t.innerHTML="",n.innerHTML="",a.innerHTML="";const s=document.createElement("div");s.classList.add("task-list-title-container"),t.appendChild(s);const i=document.createElement("div");i.classList.add("task-list-title"),i.innerHTML=d,s.appendChild(i);const o=document.createElement("div");o.classList.add("project-delete-container"),s.appendChild(o);const c=document.createElement("button");c.classList.add("delete-button"),c.addEventListener("click",e=>{e.preventDefault(),t.innerHTML="",n.innerHTML="",f(d)}),c.innerHTML="&#x2715;",o.appendChild(c),t.appendChild(a),a.appendChild((e=>{const t=document.createElement("div"),n=JSON.parse(window.localStorage.getItem(e)),a=n.tasks;for(let e=0;e<n.tasks.length;e++){const n=document.createElement("div");n.classList.add("task-tab-div"),t.appendChild(n);const d=document.createElement("div");d.classList.add("task-tab-date"),n.appendChild(d);const s=document.createElement("div");s.classList.add("task-date"),s.innerHTML=`${a[e].date}`,d.appendChild(s);const i=document.createElement("div");i.classList.add("tab-check-delete"),n.appendChild(i);const o=document.createElement("div");o.classList.add("tabs"),o.classList.add("task-tab"),i.appendChild(o);const c=document.createElement("input");c.type="radio",c.name="task-tabs",c.id=`${a[e].title}`,o.appendChild(c);const l=document.createElement("label");l.innerHTML=`${a[e].title}`,l.htmlFor=`${a[e].title}`,o.appendChild(l);const r=document.createElement("div");r.classList.add("check-delete"),i.appendChild(r);const u=document.createElement("button");u.classList.add("check-button"),u.innerHTML="&#x2713;",u.dataset.value=`${e}`,r.appendChild(u);const m=document.createElement("button");switch(m.classList.add("delete-button"),m.innerHTML="&#x2715;",m.dataset.value=`${e}`,r.appendChild(m),a[e].priority){case"Low":d.style.backgroundColor="#2CD5C4";break;case"Medium":d.style.backgroundColor="#365ABD";break;case"High":d.style.backgroundColor="#FB637E"}switch(a[e].completed){case"true":i.classList.add("completed");break;case"false":i.classList.contains("completed")&&i.style.classList.remove("completed")}}return t})(d)),document.querySelectorAll(".delete-button").forEach(e=>{e.addEventListener("click",e=>{g(e.target.dataset.value,d),e.target.parentNode.parentNode.parentNode.remove()})}),document.querySelectorAll(".check-button").forEach(e=>{e.addEventListener("click",e=>{S(e.target.dataset.value,d),e.target.parentNode.parentNode.classList.toggle("completed")})}),y(d)})})};k();const y=e=>{const t=document.querySelector(".task-container");document.querySelectorAll(".task-tab").forEach(n=>{n.addEventListener("change",n=>{const a=n.target.id;t.innerHTML="";const d=JSON.parse(window.localStorage.getItem(e));for(let e=0;e<d.tasks.length;e++)if(d.tasks[e].title===a){t.appendChild(m(d.tasks[e])),document.querySelector(".edit").addEventListener("click",t=>{t.preventDefault(),document.querySelector(".display").appendChild(p(d.tasks[e])),u(),document.getElementById("edit-form").addEventListener("submit",(function(t){const n=document.querySelector("#edit-title").value,a=document.querySelector("#edit-priority").value,s=document.querySelector("#edit-date").value,i=document.querySelector("#edit-subtask1").value,o=document.querySelector("#edit-subtask2").value,c=document.querySelector("#edit-description").value,l=document.querySelector("#edit-notes").value;if(""==n)return;const r=JSON.parse(window.localStorage.getItem(d.name));r.tasks[e].title=n,r.tasks[e].priority=a,r.tasks[e].date=s,r.tasks[e].subtask1=i,r.tasks[e].subtask2=o,r.tasks[e].description=c,r.tasks[e].notes=l,window.localStorage.setItem(`${r.name}`,JSON.stringify(r))}))}),document.querySelectorAll(".check-button-subtask").forEach(t=>{t.addEventListener("click",t=>{t.target.parentNode.parentNode.firstChild.classList.toggle("completed"),T(e,d.name,t.target.dataset.value)})})}})})},f=e=>{window.localStorage.removeItem(e),C.innerHTML=`Projects ( ${window.localStorage.length} )`,v.innerHTML="",v.appendChild(d()),E.options.length=0;for(let e=0;e<window.localStorage.length;e++){const t=JSON.parse(window.localStorage.getItem(localStorage.key(e))),n=document.createElement("option");n.value=`${t.name}`,n.innerHTML=`${t.name}`,E.appendChild(n)}k(),y()},g=(e,t)=>{const n=JSON.parse(window.localStorage.getItem(t)),a=n.tasks;a.splice(e,1),w(n.name,a)},S=(e,t)=>{const n=JSON.parse(window.localStorage.getItem(t));"false"==n.tasks[e].completed?n.tasks[e].completed="true":n.tasks[e].completed="false",window.localStorage.setItem(`${n.name}`,JSON.stringify(n))},w=(e,t)=>{for(let n=0;n<window.localStorage.length;n++){const a=JSON.parse(window.localStorage.getItem(localStorage.key(n)));a.name==e&&(a.tasks=t,window.localStorage.setItem(`${a.name}`,JSON.stringify(a)))}},T=(e,t,n)=>{const a=JSON.parse(window.localStorage.getItem(t));"subtask1"==n?0==a.tasks[e].subtask1Completed?a.tasks[e].subtask1Completed=!0:a.tasks[e].subtask1Completed=!1:0==a.tasks[e].subtask2Completed?a.tasks[e].subtask2Completed=!0:a.tasks[e].subtask2Completed=!1,window.localStorage.setItem(`${a.name}`,JSON.stringify(a))}}]);