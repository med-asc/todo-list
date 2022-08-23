/* eslint-disable no-param-reassign */
import Project from './project';
import Todo from './todo';
import renderNav, {
  renderProjectForm,
  renderTodoForm,
  renderProjectPage,
  renderTodoDetails,
} from './renderHtml';

// Creates elements that are required for the page
const uiLoad = {
  projectList: [],
  init() {
    this.cacheDoom();
    this.showNav();
  },
  cacheDoom() {
    this.pageHeader = document.querySelector('.nav-start');
    this.pageBody = document.querySelector('#mainContent .container');
  },
  showNav() {
    renderNav(this.pageHeader, this.projectList);
    this.navEvent();
  },
  navEvent() {
    const btn = document.querySelector('.btn-project');
    btn.addEventListener('click', () => {
      this.showForm();
      this.removeActive();
    });

    const navItems = document.querySelectorAll('.project li');
    navItems.forEach((link) => {
      link.addEventListener('click', () => {
        const obj = this.getProjectByID(link.getAttribute('data-id'));
        this.setActive(obj);
        this.showPage(obj);
      });
    });
  },
  showForm(obj = false) {
    renderProjectForm(this.pageBody, obj);

    if (obj) {
      this.submitFormEdit(obj);
    } else {
      this.submitFormNew();
    }
  },
  submitFormNew() {
    const subBtn = document.querySelector('#submitProject');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.create(document.querySelector('#projectTitle').value);
    });
  },
  submitFormEdit(obj) {
    const subBtn = document.querySelector('#submitProject');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();
      obj.title = document.querySelector('#projectTitle').value;
      this.showNav();
      this.setActive(obj);
      this.showPage(obj);
    });
  },
  create(title) {
    const newProject = new Project(title);
    this.projectList.push(newProject);
    this.showNav();
  },
  setActive(obj) {
    const currentActive = document.querySelector('.active');
    if (currentActive) this.removeActive();

    const target = document.querySelector(`.project li[data-id="${obj.id}"]`);
    target.classList.add('active');
  },
  removeActive() {
    const currentActive = document.querySelector('.active');
    currentActive.classList.remove('active');
  },
  getProjectByID(projectId) {
    if (typeof projectId === 'string') projectId = parseInt(projectId, 10);
    const idx = this.projectList.findIndex(
      (project) => project.id === projectId,
    );
    return this.projectList[idx];
  },
  getTodoByID(todoId, obj) {
    if (typeof todoId === 'string') todoId = parseInt(todoId, 10);
    const idx = obj.list.findIndex((todo) => todo.id === todoId);
    return obj.list[idx];
  },
  showPage(obj) {
    renderProjectPage(this.pageBody, obj);

    this.pageEvent(obj);
  },
  pageEvent(obj) {
    const editProject = document.querySelector('#editProject');
    editProject.addEventListener('click', () => {
      this.showForm(obj);
    });

    const addTodo = document.querySelector('#addTodo');
    addTodo.addEventListener('click', () => {
      this.showFormTodo();
    });

    const showTodo = document.querySelectorAll('.row-item');
    showTodo.forEach((item) => {
      item.addEventListener('click', () => {
        this.showTodoDetails(item, obj.id);
      });
    });

    const checkbox = document.querySelectorAll('.lg-check');
    checkbox.forEach((box) => {
      box.addEventListener('change', () => {
        const todoObj = this.getTodoByID(box.getAttribute('id'), obj);
        if (box.checked) {
          todoObj.done = true;
        } else {
          todoObj.done = false;
        }
        this.showPage(obj);
      });
    });
  },
  showFormTodo(obj = false) {
    renderTodoForm(this.pageBody, obj);

    if (obj) {
      this.submitTodoFormEdit(obj);
    } else {
      this.submitTodoFormNew();
    }
  },
  submitTodoFormNew() {
    const subBtn = document.querySelector('#submitTodo');
    subBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const title = document.querySelector('#todoTitle').value;
      const description = document.querySelector('#todoDesc').value;
      const date = document.querySelector('#todoDate').value;
      const priority = document.querySelector(
        'input[name="priority"]:checked',
      ).value;

      this.createTodo(title, description, date, priority);
    });
  },
  submitTodoFormEdit(obj) {
    const subBtn = document.querySelector('#submitTodo');
    const delBtn = document.querySelector('#deleteTodo');

    delBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = document
        .querySelector('.active')
        .getAttribute('data-id');
      const projectObj = this.getProjectByID(projectId);
      projectObj.removeFromList(obj.id);
      this.showPage(projectObj);
    });

    subBtn.addEventListener('click', (e) => {
      e.preventDefault();

      obj.title = document.querySelector('#todoTitle').value;
      obj.description = document.querySelector('#todoDesc').value;
      obj.date = document.querySelector('#todoDate').value;
      obj.priority = document.querySelector(
        'input[name="priority"]:checked',
      ).value;

      const projectId = document
        .querySelector('.active')
        .getAttribute('data-id');
      const projectObj = this.getProjectByID(projectId);
      this.showPage(projectObj);
    });
  },
  createTodo(title, description, date, priority) {
    const newTodo = new Todo(title, description, date, priority);

    const projectId = document.querySelector('.active').getAttribute('data-id');
    const projectObj = this.getProjectByID(projectId);

    projectObj.addToList(newTodo);
    this.showPage(projectObj);
  },
  showTodoDetails(item, projectId) {
    const id = item.getAttribute('data-id');
    const projectObj = this.getProjectByID(projectId);
    const todoObj = this.getTodoByID(id, projectObj);

    const divInfo = document.querySelector('.row-details');
    if (divInfo) divInfo.remove();

    renderTodoDetails(item, todoObj);

    this.editTodoEvent(projectObj, todoObj);
  },
  editTodoEvent(project, todo) {
    const btn = document.querySelector('.btn-todo');
    if (btn) {
      btn.addEventListener('click', () => {
        this.showFormTodo(todo);
      });
    }
  },
};

export default uiLoad;
