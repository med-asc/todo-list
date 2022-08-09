// Creates elements that are required for the page
const uiPageLoad = {
    init: function() {
        this.cacheDoom();
        this.createProject();
    },
    cacheDoom: function() {
        this.container = document.querySelector('.nav-start');
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
    },
}

export default uiPageLoad;