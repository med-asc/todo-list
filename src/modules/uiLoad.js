import { createHtml } from "./htmlGen";
import Project from "./project";

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
        });
    },
    showForm: function() {
        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = createHtml({type: 'div', class: 'pageHeader-heading'});
        let h2Head = createHtml({type: 'h2', text: 'Add new Project'});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);

        // form
        let form = createHtml({type: 'form', attr: [['action', '']]});
        let formDiv = createHtml({type: 'div'});
        let label = createHtml({type: 'label', attr: [['for', 'projectTitle']], text: 'Add new Project'});
        let input = createHtml({type: 'input', attr: [['type', 'text'], ['name', 'projectTitle'], ['id', 'projectTitle']]});
        let subBtn = createHtml({type: 'button', text: 'Create Project', class: 'btn', attr: [['id', 'submitProject']]})
        formDiv.appendChild(label);
        formDiv.appendChild(input);
        form.appendChild(formDiv);
        form.appendChild(subBtn);
        this.pageBody.appendChild(form);
        this.submitForm();
    },
    submitForm: function() {
        let subBtn = document.querySelector('#submitProject');
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.create(document.querySelector('#projectTitle').value);
            this.pageBody.innerHTML = '';
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
        if (currentActive) currentActive.classList.remove('active');

        let target = document.querySelector(`.project li[data-id="${obj.id}"]`);
        target.classList.add('active');
    },
    getProjectByID(projectId) {
        if (typeof projectId === 'string') projectId = parseInt(projectId);
        let idx = this.projectList.findIndex(project => project.id === projectId);
        return this.projectList[idx];
    },
    showPage: function(obj) {
        this.pageBody.innerHTML = '';
        // Create div header
        let divHead = createHtml({type: 'div', class: 'pageHeader-heading'});
        let h2Head = createHtml({type: 'h2', text: obj.title});
        divHead.appendChild(h2Head);
        this.pageBody.appendChild(divHead);
    }
}


export default uiLoad;