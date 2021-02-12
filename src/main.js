import { logIn } from './lib/logIn.js';
import { home } from './lib/home.js';
import { signUp } from './lib/signUp.js';
import { error404 } from './lib/error404.js';
import { createUser, logInEmailPass, authGitHub, authGoogle } from './userFireBase.js';

const rootDiv = document.getElementById('root');
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render =  async () => {
    let viewWelcome = logIn;
    rootDiv.innerHTML = await (viewWelcome);
    let route = location.hash;
    router(route);
};

//Renderiza las páginas de acuerdo al hash de cada página
const routes = {
    '#/signup/': signUp,
    '#/': home,
}

function router(route) {
    if (Object.keys(routes).includes(route)) {
        rootDiv.innerHTML = routes[route]; //routes['#/signup']
    } else if (route != "") {
        rootDiv.innerHTML = error404;
    }
}

const logInData = () => {
  document.getElementById("error--message").style.display="none";
  const formLogIn = document.forms.logInForm;
  const logInGithub = document.getElementById('logInGithub')
  logInGithub.addEventListener('click', authGitHub);
  let logInGoogleButton = document.getElementById('logInGoogleButton');
  logInGoogleButton.addEventListener('click', authGoogle);
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
    document.getElementById("error--message--signUp").style.display="none";
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
