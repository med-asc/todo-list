let id = 0;
function idCounter() {
  id += 1;
  return id;
}

class Project {
  todoList = [];

  constructor(title) {
    this.ProjectTitle = title;
    this.ProjectId = idCounter();
  }

  addToList(obj) {
    this.todoList.push(obj);
  }

  removeFromList(todoId) {
    const idx = this.todoList.findIndex((todo) => todo.id === todoId);
    this.todoList.splice(idx, 1);
  }

  get id() {
    return this.ProjectId;
  }

  set id(value) {
    this.ProjectId = value;
  }

  get title() {
    return this.ProjectTitle;
  }

  set title(value) {
    this.ProjectTitle = value;
  }

  get list() {
    return this.todoList;
  }
}

export default Project;
