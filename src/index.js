import Todo from './modules/todo';
import Project from './modules/project';
import './style/style.css';
import UserAvatar from './asset/img/user.png';

// Add the user avatar image to our existing user-div.
const avatarElement = document.querySelector('.user');
const myIcon = new Image();
myIcon.src = UserAvatar;
avatarElement.appendChild(myIcon);