import { logIn } from './lib/logIn.js';
import { home } from './lib/home.js';
import { signUp } from './lib/signUp.js';
import { error404 } from './lib/error404.js';
import { createUser, logInEmailPass, authGitHub } from './userFireBase.js';

const rootDiv = document.getElementById('root');

//  Rutas con su correspondiente template
export const routes = {
  '#/signup/': signUp,
  '#/': home,
};

//  Renderiza las páginas de acuerdo al hash de cada página
export const router = (route) => {
  if (Object.keys(routes).includes(route)) {
    rootDiv.innerHTML = routes[route];
  } else if (route !== '') {
    rootDiv.innerHTML = error404;
  }
};

//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
  const viewWelcome = logIn;
  rootDiv.innerHTML = await (viewWelcome);
  const route = window.location.hash;
  router(route);
};

const logInData = () => {
  const formLogIn = document.forms.logInForm;
  const logInGithub = document.getElementById('logInGithub');
  logInGithub.addEventListener('click', authGitHub);
  formLogIn.addEventListener('submit', () => {
    const email = formLogIn.logInEmail.value;
    const password = formLogIn.logInPassword.value;
    logInEmailPass(email, password);
  });
};

const signUpData = () => {
  const formSignUp = document.forms.signUpForm;
  formSignUp.addEventListener('submit', () => {
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
