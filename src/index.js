import { loadMenuPage } from './home.js';

const container = document.createElement('div');
container.id = 'container';

const navBtns = document.querySelector('.nav-btns');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';
navBtns.appendChild(homeBtn);
navBtns.appendChild(menuBtn);
navBtns.appendChild(contactBtn);