// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { authPage } from './lib/authPages.js';
import {
  authSN, signUp, logInEmail, logOut, hasUserAuth 
} from './lib/authScript.js';
import { homePage } from './lib/pages.js';


const mainPage = document.getElementById('root');

const routes = {
  '#/login/': authPage,
  '#/': homePage,
};

mainPage.innerHTML = authPage;

const socialContainer = document.getElementById('social-container');
socialContainer.addEventListener('click', authSN);

const formSignUp = document.forms.signUpForm;
formSignUp.addEventListener('submit', signUp);

const formLogIn = document.forms.logInForm;
formLogIn.addEventListener('submit', logInEmail);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () => {
container.classList.remove('right-panel-active');
});

myFunction();
