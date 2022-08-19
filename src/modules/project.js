class Project {
    list = [];

    constructor(title) {
        this._title = title;
        this._id = idCounter();
    }

    addToList(obj) {
        this.list.push(obj);
    }

    removeFromList(todoId) {
        let idx = this.list.findIndex(todo => todo.id === todoId);
        this.list.splice(idx, 1);
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
    
    get list() {
        return this.list;
    }
}

let id = 0;
function idCounter() {
    ++id
    return id; 
}


export default Project;