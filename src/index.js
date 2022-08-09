import Todo from './modules/todo';
import Project from './modules/project';
import './style/style.css';
import UserAvatar from './asset/img/user.png';
import uiPageLoad from './modules/uiLoad';
import uiProject from './modules/uiProject';

// Add the user avatar image to our existing user-div.
const avatarElement = document.querySelector('.user');
const myIcon = new Image();
myIcon.src = UserAvatar;
avatarElement.appendChild(myIcon);

// Add html elements to page when load
// - nav    | Nav that holds the projects
// - button | Add new project
uiPageLoad.init();

// Add one new project and set it to active
let firstProject = new Project('First project');
uiProject.add(firstProject);
uiProject.setActive(firstProject);