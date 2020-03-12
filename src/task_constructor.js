"use strict";

function task(title, priority, date, subtask1, subtask2, description, notes) {
  this.title = title;
  this.priority = priority;
  this.date = date;
  this.subtask1 = subtask1;
  this.subtask2 = subtask2;
  this.description = description;
  this.notes = notes;
}

export { task };
