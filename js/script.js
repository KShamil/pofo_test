"use strict";

//POPUP FUNCTION

const hiddenBtn = document.querySelector('.second_btn');
const menuBtn = document.querySelector('.burger_btn');
const hiddenBlock = document.querySelector('#show');

menuBtn.onclick =()=> {
    hiddenBlock.attributes[0].value = 'hide';
}

hiddenBtn.onclick =()=> {
    hiddenBlock.attributes[0].value = 'show';
}

//CHANGE LANGUAGE FUNCTION

const changeLangObj = {
    az: ['Mən <span>Colin Smitəm</span>','DİZAYNER VƏ FRONTEND TƏRTİBATÇI'],
    en: ["I'm <span>Colin Smith</span>",'DESIGNER & FRONTEND DEVELOPER']
}

const langBtn = document.querySelector('.lang_btn');
const langTitle = document.querySelector('.title');
const langSubtitle = document.querySelector('.subtitle');

const changelangFunc =()=> {
    if (langBtn.innerHTML === 'ENG') {
        localStorage.setItem('changeLangTitle',langTitle.innerHTML = changeLangObj.az[0]);
        langTitle.innerHTML = localStorage.getItem('changeLangTitle');
        localStorage.setItem('changeLangSubtitle',langSubtitle.innerHTML = changeLangObj.az[1]);
        langSubtitle.innerHTML = localStorage.getItem('changeLangSubtitle');
        localStorage.setItem('changeLangBtn',langBtn.innerHTML = 'AZ');
        langBtn.innerHTML = localStorage.getItem('changeLangBtn');
    } else {
        localStorage.setItem('changeLangTitle',langTitle.innerHTML = changeLangObj.en[0]);
        langTitle.innerHTML = localStorage.getItem('changeLangTitle');
        localStorage.setItem('changeLangSubtitle',langSubtitle.innerHTML = changeLangObj.en[1]);
        langSubtitle.innerHTML = localStorage.getItem('changeLangSubtitle');
        localStorage.setItem('changeLangBtn',langBtn.innerHTML = 'ENG');
    }
}

langTitle.innerHTML = localStorage.getItem('changeLangTitle');
langSubtitle.innerHTML = localStorage.getItem('changeLangSubtitle');
langBtn.innerHTML = localStorage.getItem('changeLangBtn');

langBtn.onclick = changelangFunc;


//CHANGE MODE FUNCTION

const darkMode = document.querySelector('#light');
const ModeBtn = document.querySelector('.mode_btn');
const lightModeBtn = document.querySelector('.light_mode');
const darkModeTitle = document.querySelector('#light_title');
const darkBurgerBtn = document.querySelector('#light_btn');
const whiteLogo = document.querySelector('.white_logo')

const modeItem = {
    light: "light",
    dark: "dark",
    darkTitle: "dark_title",
    lightTitle: "light_title",
    lightBtn: "light_btn",
    darkBtn: "dark_btn"
}

ModeBtn.onclick =()=> {
    if (darkMode.attributes[0].value === modeItem.light) {
        localStorage.setItem('mode',modeItem.dark);
        darkMode.attributes[0].value = localStorage.getItem('mode');
        localStorage.setItem('modeTitle',modeItem.darkTitle);
        darkModeTitle.attributes[0].value = localStorage.getItem('modeTitle');
        localStorage.setItem('modeBtn',modeItem.darkBtn);
        darkBurgerBtn.attributes[0].value = localStorage.getItem('modeBtn');
        localStorage.setItem('darkLogo',document.querySelector('.white_logo').src = 'images/logo-white2x.png');
        localStorage.getItem('darkLogo');
        document.querySelector('.white_logo').src = localStorage.getItem('darkLogo');
        localStorage.setItem('modeBtnColor',ModeBtn.style.color = 'aqua');
        ModeBtn.style.color = localStorage.getItem('modeBtnColor');
        localStorage.setItem('modeBtnIcon',ModeBtn.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>');
        ModeBtn.innerHTML = localStorage.getItem('modeBtnIcon');
    } else {
        localStorage.setItem('mode',modeItem.light);
        darkMode.attributes[0].value = localStorage.getItem('mode');
        localStorage.setItem('modeTitle',modeItem.lightTitle);
        darkModeTitle.attributes[0].value = localStorage.getItem('modeTitle');
        localStorage.setItem('modeBtn',modeItem.lightBtn);
        darkBurgerBtn.attributes[0].value = localStorage.getItem('modeBtn');
        localStorage.setItem('darkLogo',document.querySelector('.white_logo').src = 'images/logo2x.png');
        localStorage.getItem('darkLogo');
        document.querySelector('.white_logo').src = localStorage.getItem('darkLogo');
        localStorage.setItem('modeBtnColor',ModeBtn.style.color = 'yellow');
        ModeBtn.style.color = localStorage.getItem('modeBtnColor');
        localStorage.setItem('modeBtnIcon',ModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>');
        ModeBtn.innerHTML = localStorage.getItem('modeBtnIcon');
    }
}

darkMode.attributes[0].value = localStorage.getItem('mode');
darkModeTitle.attributes[0].value = localStorage.getItem('modeTitle');
darkBurgerBtn.attributes[0].value = localStorage.getItem('modeBtn');
document.querySelector('.white_logo').src = localStorage.getItem('darkLogo');
ModeBtn.style.color = localStorage.getItem('modeBtnColor');
ModeBtn.innerHTML = localStorage.getItem('modeBtnIcon');

