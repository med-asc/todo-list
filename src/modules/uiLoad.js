import uiProject from "./uiProject";

// Creates elements that are required for the page
const uiPageLoad = {
    init: function() {
        this.cacheDoom();
        this.createProject();
    },
    cacheDoom: function() {
        this.container = document.querySelector('.nav-start');
        this.body = document.querySelector('#mainContent .container');
        this.btnProject = document.querySelector('.btn-project');
    },
    bindEvents: function() {
        this.btnProject.addEventListener('click', () => {
            this.projectForm();
        });
    },
    createProject: function() {
        let nav = document.createElement('nav');
        let navUl = document.createElement('ul');
        navUl.classList.add('project');
        nav.appendChild(navUl);

        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-project');
        btnAdd.textContent = 'Add project';
        
        this.container.appendChild(nav);
        this.container.appendChild(btnAdd);
        this.cacheDoom();
        this.bindEvents();
    },
    projectForm: function() {
        this.body.innerHTML = '';
        let heading = document.createElement('div');
        heading.classList.add('container-heading');
        let title = document.createElement('h2');
        title.textContent = 'Add new Project';

        heading.appendChild(title);
        this.body.appendChild(heading);

        let form = document.createElement('form');
        form.setAttribute('action', '');
        let formRow1 = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'projectTitle');
        titleLabel.textContent = 'Add new Project';
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'projectTitle');
        titleInput.setAttribute('id', 'projectTitle');

        let formBtn = document.createElement('button');
        formBtn.textContent = 'Create Project';
        formBtn.classList.add('btn');
        formBtn.setAttribute('id', 'submitProject');

        formRow1.appendChild(titleLabel);
        formRow1.appendChild(titleInput);
        form.appendChild(formRow1);
        form.appendChild(formBtn);

        this.body.appendChild(form);
        this.cacheDoom();
        this.bindEvents();
        this.projectSubmit();
    },
    projectSubmit: function() {
        const btnSubmitProject = document.querySelector('#submitProject');
        btnSubmitProject.addEventListener('click', (e) => {
            e.preventDefault();
            const titleValue = document.querySelector('#projectTitle').value;
            uiProject.create(titleValue);
            this.body.innerHTML = '';
        });
    }
}

export default uiPageLoad;