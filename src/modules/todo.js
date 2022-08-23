let id = 0;
function idCounter() {
  id += 1;
  return id;
}

class Todo {
  constructor(title, description, date = false, priority = 'low') {
    this.todoId = idCounter();
    this.todoTitle = title;
    this.todoDescription = description;
    this.todoDate = date;
    this.todoPriority = priority;
    this.todoDone = false;
  }

  get id() {
    return this.todoId;
  }

  set id(value) {
    this.todoId = value;
  }

  get title() {
    return this.todoTitle;
  }

  set title(value) {
    this.todoTitle = value;
  }

  get description() {
    return this.todoDescription;
  }

  set description(value) {
    this.todoDescription = value;
  }

  get date() {
    return this.todoDate;
  }

  set date(value) {
    this.todoDate = value;
  }

  get priority() {
    return this.todoPriority;
  }

  set priority(value) {
    this.todoPriority = value;
  }

  get done() {
    return this.todoDone;
  }

  set done(bool) {
    this.todoDone = bool;
  }
}

export default Todo;
