import { createHtml } from "./htmlGen";
import Project from "./project";
import Todo from "./todo";

// Creates elements that are required for the page
const uiLoad = {
    projectList: [],
    init: function() {
        this.cacheDoom();
        this.showNav();
    },
    cacheDoom: function() {
        this.pageHeader = document.querySelector('.nav-start');
        this.pageBody = document.querySelector('#mainContent .container');
    },
    showNav: function() {
        let ul = createHtml({type: 'ul', class: 'project'});
        let nav = createHtml({type: 'nav'});
        let btn = createHtml({type: 'button', class: 'btn btn-project', text: 'Add project'});

        nav.appendChild(ul);
        this.pageHeader.appendChild(nav);
        this.pageHeader.appendChild(btn);

        this.showFormEvent();
    },
    showFormEvent: function() {
        let btn = document.querySelector('.btn-project');
        btn.addEventListener('click', () => {
            this.showForm();
            this.removeActive();
        });
    },
    showForm: function(obj = false) {
        let formText = {}
        if (obj) {
            formText.h2 = `Edit ${obj.title}`;
            formText.label = 'Title';
            formText.input = obj.title;
            formText.btn = 'Update';
        } else {
            formText.h2 = 'Add new Project';
            formText.label = 'Title';
            formText.input = '';
            formText.btn = 'Add';
        }

        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = createHtml({type: 'div', class: 'pageHeader-heading'});
        let h2Head = createHtml({type: 'h2', text: formText.h2});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);

        // form
        let form = createHtml({type: 'form', attr: [['action', '']]});
        let formDiv = createHtml({type: 'div'});
        let label = createHtml({type: 'label', attr: [['for', 'projectTitle']], text: formText.label });
        let input = createHtml({type: 'input', attr: [['type', 'text'], ['name', 'projectTitle'], ['id', 'projectTitle'],['value', formText.input]]});
        let subBtn = createHtml({type: 'button', text: formText.btn, class: 'btn', attr: [['id', 'submitProject']]})
        formDiv.appendChild(label);
        formDiv.appendChild(input);
        form.appendChild(formDiv);
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);

        (obj) ? this.submitFormEdit(obj) : this.submitFormNew();
    },
    submitFormNew: function() {
        let subBtn = document.querySelector('#submitProject');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.create(document.querySelector('#projectTitle').value);
        });
    },
    submitFormEdit: function(obj) {
        let subBtn = document.querySelector('#submitProject');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            obj.title = document.querySelector('#projectTitle').value;
            this.refreshProject();
            this.setActive(obj);
            this.showPage(obj);
        });
    },
    create: function(title) {
        let newProject = new Project(title);
        this.projectList.push(newProject);
        this.showProject(newProject);
    },
    showProject: function(obj) {
        let navUl = document.querySelector('.project');
        let li = createHtml({type: 'li', attr: [['data-id', obj.id]], class: 'nav-item'});
        let a = createHtml({type: 'a', attr: [['href', '#']], text: obj.title});
        li.appendChild(a);
        navUl.appendChild(li);

        this.navigationEvent();
    },
    refreshProject: function() {
        let navUl = document.querySelector('.project');
        navUl.innerHTML = '';
        for (let i = 0; i < this.projectList.length; i++) {
            let li = createHtml({type: 'li', attr: [['data-id', this.projectList[i].id]], class: 'nav-item'});
            let a = createHtml({type: 'a', attr: [['href', '#']], text: this.projectList[i].title});
            li.appendChild(a);
            navUl.appendChild(li);
        }
        
        this.navigationEvent();
    },
    navigationEvent: function() {
        let navItems = document.querySelectorAll('.project li');
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                let obj = this.getProjectByID(link.getAttribute('data-id'));
                this.setActive(obj);
                this.showPage(obj);
            });
        });
    },
    setActive: function(obj) {
        let currentActive = document.querySelector('.active');
        if (currentActive) this.removeActive();

        let target = document.querySelector(`.project li[data-id="${obj.id}"]`);
        target.classList.add('active');
    },
    removeActive: function() {
        let currentActive = document.querySelector('.active');
        currentActive.classList.remove('active');
    },
    getProjectByID(projectId) {
        if (typeof projectId === 'string') projectId = parseInt(projectId);
        let idx = this.projectList.findIndex(project => project.id === projectId);
        return this.projectList[idx];
    },
    getTodoByID(todoId, obj) {
        if (typeof todoId === 'string') todoId = parseInt(todoId);
        let idx = obj.list.findIndex(todo => todo.id === todoId);
        return obj.list[idx];
    },
    showPage: function(obj) {
        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = createHtml({type: 'div', class: 'pageHeader-heading'});
        let h2Head = createHtml({type: 'h2', text: obj.title});
        let projectEdit = createHtml({type: 'button', class: 'btn', text: 'Edit project', attr: [['id', 'editProject']]});
        divHead.appendChild(h2Head);
        divHead.appendChild(projectEdit);
        this.pageBody.appendChild(divHead);

        let btnAdd = createHtml({type: 'button', class: 'btn', text: 'Add Todo', attr: [['id', 'addTodo']]});
        this.pageBody.appendChild(btnAdd);

        let divBody = createHtml({type: 'div', class: 'page-body'});
        
        obj.list.forEach((item) => {
            let divTodo = createHtml({type: 'div', class: 'row-item', attr: [['data-id', item.id]]});
            let divHead = createHtml({type: 'div', class: 'row-heading'});
            let divTitle = createHtml({type: 'div', class: 'row-title'})
            let check = createHtml({type: 'input', attr: [['type', 'checkbox']], class: 'lg-check'});
            let title = createHtml({type: 'p', text: item.title});
            let priority = createHtml({type: 'span', text: item.priority, class: `priority priority-${item.priority}`});
            let dueDate = createHtml({type: 'span', text: item.date, class: 'due-date'});
            divTitle.appendChild(check);
            divTitle.appendChild(title);
            divTitle.appendChild(priority);
    
            divHead.appendChild(divTitle);
            divHead.appendChild(dueDate);
            divTodo.appendChild(divHead);
            divBody.appendChild(divTodo);
        })
        
        this.pageBody.appendChild(divBody);

        this.pageEvent(obj);

    },
    pageEvent: function(obj){
        let editProject = document.querySelector('#editProject');
        editProject.addEventListener('click', () => {
            this.showForm(obj);
        });
        
        let addTodo = document.querySelector('#addTodo');
        addTodo.addEventListener('click', () => {
            this.showFormTodo();

        });

        let showTodo = document.querySelectorAll('.row-item');
        showTodo.forEach((item) => {
            item.addEventListener('click', () => {
                this.showTodoDetails(item, obj.id);
            });
        });
    },
    showFormTodo: function(obj = false) {
        let formText = {}
        formText.h2 = 'Create new Todo';
        formText.label = 'Title';
        formText.input = '';
        formText.label2 = 'Description';
        formText.label3 = 'Due date';
        formText.label4 = 'Priority';
        formText.btn = 'Add';

        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = createHtml({type: 'div', class: 'pageHeader-heading'});
        let h2Head = createHtml({type: 'h2', text: formText.h2});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);

        // form
        let form = createHtml({type: 'form', attr: [['action', '']]});

        let formDiv = createHtml({type: 'div'});
        let label = createHtml({type: 'label', attr: [['for', 'todoTitle']], text: formText.label });
        let input = createHtml({type: 'input', attr: [['type', 'text'], ['name', 'todoTitle'], ['id', 'todoTitle'],['value', formText.input]]});

        formDiv.appendChild(label);
        formDiv.appendChild(input);
        form.appendChild(formDiv);
        
        let formDiv2 = createHtml({type: 'div'});
        let label2 = createHtml({type: 'label', attr: [['for', 'todoDesc']], text: formText.label2 });
        let input2 = createHtml({type: 'textarea', attr: [['name', 'desc'], ['id', 'todoDesc'], ['cols', '92'], ['rows', '10']]});
        
        formDiv2.appendChild(label2);
        formDiv2.appendChild(input2);
        form.appendChild(formDiv2);

        let formDiv3 = createHtml({type: 'div'});
        let label3 = createHtml({type: 'label', attr: [['for', 'todoDate']], text: formText.label3 });
        let input3 = createHtml({type: 'input', attr: [['type', 'date'], ['name', 'todoDate'], ['id', 'todoDate']]});

        formDiv3.appendChild(label3);
        formDiv3.appendChild(input3);
        form.appendChild(formDiv3);

        let formDiv4 = createHtml({type: 'div'});
        let label4 = createHtml({type: 'label', attr: [['for', 'todoPriority']], text: formText.label4});
        formDiv4.appendChild(label4);

        let formDivCheck1 = createHtml({type: 'div', class: 'checkbox-item'});
        let inputLow = createHtml({type: 'input', attr: [['type', 'radio'], ['id', 'lowPrio'], ['name', 'priority'], ['value', 'low']]});
        let labelLow = createHtml({type: 'label', attr: [['for', 'lowPrio']], text: 'Low priority'});

        formDivCheck1.appendChild(inputLow);
        formDivCheck1.appendChild(labelLow);
        formDiv4.appendChild(formDivCheck1);

        let formDivCheck2 = createHtml({type: 'div', class: 'checkbox-item'});
        let inputMed = createHtml({type: 'input', attr: [['type', 'radio'], ['id', 'medPrio'], ['name', 'priority'], ['value', 'medium']]});
        let labelMed = createHtml({type: 'label', attr: [['for', 'medPrio']], text: 'Medium priority'});

        formDivCheck2.appendChild(inputMed);
        formDivCheck2.appendChild(labelMed);
        formDiv4.appendChild(formDivCheck2);

        let formDivCheck3 = createHtml({type: 'div', class: 'checkbox-item'});
        let inputHigh = createHtml({type: 'input', attr: [['type', 'radio'], ['id', 'highPrio'], ['name', 'priority'], ['value', 'high']]});
        let labelHigh = createHtml({type: 'label', attr: [['for', 'highPrio']], text: 'High priority'});

        formDivCheck3.appendChild(inputHigh);
        formDivCheck3.appendChild(labelHigh);
        formDiv4.appendChild(formDivCheck3);

        form.appendChild(formDiv4);

        let subBtn = createHtml({type: 'button', text: formText.btn, class: 'btn', attr: [['id', 'submitTodo']]})
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);

        this.submitTodoFormNew();
    },
    submitTodoFormNew: function() {
        let subBtn = document.querySelector('#submitTodo');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let title = document.querySelector('#todoTitle').value;
            let description = document.querySelector('#todoDesc').value;
            let date = document.querySelector('#todoDate').value;
            let priority = document.querySelector('input[name="priority"]:checked').value;

            this.createTodo(title, description, date, priority);
        });
    },
    createTodo: function(title, description, date, priority) {
        let newTodo = new Todo(title, description, date, priority);

        let projectId = document.querySelector('.active').getAttribute('data-id');
        let projectObj = this.getProjectByID(projectId);

        projectObj.addToList(newTodo);
        this.showPage(projectObj);
    },
    showTodoDetails: function(item, projectId) {
        let id = item.getAttribute('data-id');
        let projectObj = this.getProjectByID(projectId);
        let todoObj = this.getTodoByID(id, projectObj);

        let divInfo = document.querySelector('.row-details');
        if (divInfo) divInfo.remove();

        let div = createHtml({type: 'div', class: 'row-details'});
        let desc = createHtml({type: 'p', text: todoObj.description});
        div.appendChild(desc);
        item.appendChild(div);
    }
}


export default uiLoad;