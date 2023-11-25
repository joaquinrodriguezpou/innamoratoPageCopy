import { loadHomePage } from './home.js';

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

handleBtnClick(loadHomePage());

homeBtn.addEventListener('click', () => handleBtnClick(loadHomePage()));