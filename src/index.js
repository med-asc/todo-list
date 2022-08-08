import Todo from './modules/todo';
import Project from './modules/project'
import './style/style.css';

const p1 = new Project('Project 1');
const n1 = new Todo('Important stuff', 'Have to do some important stuff...');
p1.addToList(n1);
console.log(p1.list);