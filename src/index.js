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
        returnButtonsToDefaultStyle();
        setActiveBtn(homeBtn);
        home();
    });
    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        returnButtonsToDefaultStyle();
        setActiveBtn(menuBtn);
        menu();
    });
    aboutBtn.addEventListener('click', () => {
        content.innerHTML = '';
        returnButtonsToDefaultStyle();
        setActiveBtn(aboutBtn);
        about();
    });

    const setHoverColor = (e) => {
        e.target.style.backgroundColor = '#addfff'
    }
    const resetButtonColor = (e) => {
        e.target.style.backgroundColor = '#669bbc';
    }

    const returnButtonsToDefaultStyle = () => {
        const btns = document.querySelectorAll('button');
        

        btns.forEach(element => {
            element.style.backgroundColor = '#669bbc';
            element.style.color = '#000'

            element.addEventListener('mouseenter', setHoverColor);
            element.addEventListener('mouseleave', resetButtonColor);
        });

    }

    const setActiveBtn = (btn) => {
        btn.style.backgroundColor = '#003049';
        btn.style.color = '#fff';
        btn.removeEventListener('mouseenter', setHoverColor);
        btn.removeEventListener('mouseleave', resetButtonColor);
    }
})();
