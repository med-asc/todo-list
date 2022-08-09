class Project {
    list = [];

    constructor(title) {
        this._title = title;
    }

    addToList(obj) {
        this.list.push(obj);
    }

    get title() {
        return this._title;
    }
    
    get list() {
        return this.list;
    }
}


export default Project;