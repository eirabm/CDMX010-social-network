import { logIn, signUp } from './lib/authPages.js';
import { home } from './lib/home.js';
// import { errorUserAlreadyExists } from './lib/errorUserExists.js';

import {
  createUser,
  logInEmailPass,
  authGitHub,
  authGoogle,
  authFacebook,
} from './userFireBase.js';

const rootDiv = document.getElementById('root');
// Renderiza las páginas de acuerdo al hash de cada página
const routes = {
  '#/signup/': signUp,
  '#/': home,
};
//  Renderiza el componente de la primera página cuando ésta carga
function router() {
  const { hash } = window.location;
  if (Object.keys(routes).includes(hash)) {
    rootDiv.innerHTML = routes[hash]; // routes['#/signup']
  }
}

function menu() {
  const menuu = document.getElementById('open');
  console.log(menuu);
  if (menuu.classList.contains('disable-menu-desplegable')) {
    menuu.classList.remove('disable-menu-desplegable');
    menuu.classList.add('enable-menu-desplegable');
  } else {
    menuu.classList.remove('enable-menu-desplegable');
    menuu.classList.add('disable-menu-desplegable');
  }
}
function showMenu() {
  const btnMenu = document.getElementById('btn-menu');
  console.log(btnMenu);
  btnMenu.addEventListener('click', menu);
}

//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
  const viewWelcome = logIn;
  rootDiv.innerHTML = await (viewWelcome);
  const route = window.location.hash;
  router(route);
  showMenu();
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

const getElements = () => {
  if (window.location.href === 'http://127.0.0.1:5501/src/index.html') {
    logInData();
  } else if (window.location.hash === '#/signup/') {
    signUpData();
  }
};


window.addEventListener('load', render);
window.addEventListener('hashchange', render);
window.addEventListener('hashchange', getElements);
window.addEventListener('load', logInData);
