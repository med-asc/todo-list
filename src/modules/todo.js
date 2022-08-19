class Todo {
    constructor(title, description, date = false, priority = 'low') {
        this._id = idCounter();
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._done = false;
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

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    get done() {
        return this._done;
    }

    set done(bool) {
        this._done = bool;
    }
}

let id = 0;
function idCounter() {
    ++id
    return id; 
}

export default Todo;