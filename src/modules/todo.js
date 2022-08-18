class Todo {
    constructor(title, description, date = false, priority = 'low') {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}

export default Todo;