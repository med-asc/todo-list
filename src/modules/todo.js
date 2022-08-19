class Todo {
    constructor(title, description, date = false, priority = 'low') {
        this._id = idCounter();
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    get priority() {
        return this._priority;
    }
}

let id = 0;
function idCounter() {
    ++id
    return id; 
}

export default Todo;