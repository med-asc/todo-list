class Project {
    list = [];

    constructor(title) {
        this.title = title;
    }

    addToList(obj) {
        this.list.push(obj);
    }
    
    get list() {
        return this.list;
    }
}


export default Project;