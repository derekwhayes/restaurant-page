import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import './style.css';

home();

const navigationController = (() => {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const aboutBtn = document.querySelector('#about-btn');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = '';
        home();
    });
    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        menu();
    });
    aboutBtn.addEventListener('click', () => {
        content.innerHTML = '';
        about();
    });
})();
