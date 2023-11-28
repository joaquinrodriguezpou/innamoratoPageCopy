import { loadHomePage } from './home/home.js';
import { loadMenuPage } from './menu/menu.js';
import { loadContactPage } from './contact/contact.js';

const container = document.querySelector('.content-container');

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

function handleBtnClick(loader){
    const { content } = loader;
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.appendChild(content);
}

handleBtnClick(loadMenuPage());

homeBtn.addEventListener('click', () => handleBtnClick(loadHomePage()));
menuBtn.addEventListener('click', () => handleBtnClick(loadMenuPage()));
contactBtn.addEventListener('click', () => handleBtnClick(loadContactPage()));
