import './asset/style/style.css';
import UserAvatar from './asset/img/user.png';
import uiLoad from './modules/uiLoad';

// Add the user avatar image to our existing user-div.
const avatarElement = document.querySelector('.user');
const myIcon = new Image();
myIcon.src = UserAvatar;
avatarElement.appendChild(myIcon);

// Add html elements to page when load
// - nav    | Nav that holds the projects
// - button | Add new project
uiLoad.init();

// Add one new project and set it to active
uiLoad.create('First project');
let newProject = uiLoad.getProjectByID(1);
uiLoad.setActive(newProject);
uiLoad.showPage(newProject);