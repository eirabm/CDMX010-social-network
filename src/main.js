import { signUp } from './lib/authPages.js';
import { homePage } from './lib/pages.js';
// import { errorUserAlreadyExists } from './lib/errorUserExists.js';

import {
  createUser,
  logInEmailPass,
  authGitHub,
  authGoogle,
  authFacebook,
  hasUserAuth,
} from './userFireBase.js';

const rootDiv = document.getElementById('root');
// Renderiza las páginas de acuerdo al hash de cada página
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

  navTogglerBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 1; i < totalSection; i++) {
      allSection[i] = classList.toggle('open');
    }
  });
}

const routes = {
  '/': homePage,
  '/login': signUp,
};

// function que limpia la url
const clearPathname = (hash) => hash.replace('#', '');

// render function
const renderPage = async () => {
  const isAuthenticated = await hasUserAuth();
  console.log(isAuthenticated);
  let pathname = '/';

  if (!isAuthenticated) {
    pathname = '/';
  } else if (window.location.hash.length) {
    pathname = clearPathname(window.location.hash);
  }

  rootDiv.innerHTML = routes[pathname];
};

// cuando navega
window.addEventListener('hashchange', async () => {
  await renderPage();
});

// cuando carge el sitio
window.onload = async () => {
  await renderPage();
 primeraPag();
};

const logInData = () => {
  document.getElementById('error--message').style.display = 'none';
  const formLogIn = document.forms.logInForm;
  const logInGithub = document.getElementById('logInGithub');
  logInGithub.addEventListener('click', authGitHub);
  const logInGoogleButton = document.getElementById('logInGoogleButton');
  logInGoogleButton.addEventListener('click', authGoogle);
  const btnFecebook = document.getElementById('logInFacebook');
  btnFecebook.addEventListener('click', authFacebook);
  formLogIn.addEventListener('submit', () => {
    const email = formLogIn.logInEmail.value;
    const password = formLogIn.logInPassword.value;
    logInEmailPass(email, password);
    return false;
  });
};

const signUpData = () => {
  const formSignUp = document.forms.signUpForm;
  formSignUp.addEventListener('submit', () => {
    document.getElementById('error--message--signUp').style.display = 'none';
    const name = formSignUp.signUpName.value;
    const email = formSignUp.signUpEmail.value;
    const password = formSignUp.signUpPassword.value;
    createUser(email, password);
  });
};
