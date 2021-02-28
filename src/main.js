import { authPage } from './lib/authPages.js';
import { perfil } from './lib/pages.js';
// import { errorUserAlreadyExists } from './lib/errorUserExists.js';

import { authSN, signUp, hasUserAuth , logInEmailPass} from './lib/authScript.js';

const mainPage = document.getElementById('root');
const loginContainer = document.getElementById('login-container');

function initLoginEvent() {
  const socialContainer = document.getElementById('social-container');
  console.log(socialContainer);
  socialContainer.addEventListener('click', authSN);
  const formSignUp = document.getElementById('signUpForm');
  formSignUp.addEventListener('submit', signUp);
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
}

function signInInit() {
  const formSignIn = document.getElementById('signInForm');
  formSignIn.addEventListener('submit', logInEmailPass);
}

function primeraPag() {
  const signUpButton = document.getElementById('signUp');
  console.log(signUpButton);
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const signUpMobile = document.getElementById('sign-up-mobile');
  const signInMobile = document.getElementById('sign-in-mobile');
  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  signUpMobile.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInMobile.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
}
function home() {
  const navTogglerBtn = document.querySelector('.nav-toggler');
  console.log(navTogglerBtn);
  const aside = document.querySelector('.aside');
  const section = document.getElementById('navegador');

  navTogglerBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    section.classList.toggle('open');
  });
}
home();

const routes = {
  home: () => {
    mainPage.innerHTML = '<div>home/posts<a href="#/perfil">Ir a mi perfil</a></div>';
    mainPage.classList.remove('none');
    loginContainer.classList.add('none');
  },
  login: () => {
    loginContainer.innerHTML = authPage;
    initLoginEvent();
    primeraPag();
    signInInit();
  },
  perfil: () => {
    mainPage.innerHTML = perfil;
    mainPage.classList.remove('none');
    loginContainer.classList.add('none');
  },

  new: () => {
    mainPage.innerHTML = newPostPage;
    mainPage.classList.remove('none');
    loginContainer.classList.add('none');
  },
};

// function que limpia la url
const clearPathname = (hash) => hash.replace('#/', '');

// render function
const renderPage = async () => {
  const isAuthenticated = await hasUserAuth();
  let pathname = '';
  if (!isAuthenticated) {
    pathname = 'login';
  } else {
    pathname = clearPathname(window.location.hash);
    if (!pathname.length) {
      pathname = 'home';
    }
  }
  console.log(pathname);
  const page = routes[pathname];
  page();
};

// cuando navega
window.addEventListener('hashchange', async () => {
  await renderPage();
});

// cuando carge el sitio
window.onload = async () => {
  await renderPage();
};

