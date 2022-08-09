import Project from "./project";

// Add          | Adds project to navigation
// SetActive    | Sets project as active in navigation
const uiProject = {
    cacheDoom: function() {
        this.projects = document.querySelector('.project');
    },
    add: function(obj) {
        this.cacheDoom();
        let navLi = document.createElement('li');
        navLi.setAttribute('data-id', obj.id);
        let navItem = document.createElement('a');
        navItem.setAttribute('href', '#');
        navItem.textContent = obj.title;

        navLi.appendChild(navItem);
        this.projects.appendChild(navLi);
    },
    setActive: function(obj) {
        let id = document.querySelector(`.project li[data-id="${obj.id}"]`);
        id.classList.add('active');
    },
    create: function(title) {
        const n = new Project(title);
        this.add(n);
    }
}

export default uiProject;