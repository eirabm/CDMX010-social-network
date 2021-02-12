import { logIn } from './lib/logIn.js';
import { home } from './lib/home.js';
// import { error404 } from './lib/error404.js';
import { errorUserAlreadyExists } from './lib/errorUserExists.js';
// import { modalOne } from './modal.js';
// import {routes} from './routes.js';
import { signUp } from './lib/signUp.js';
import { error404 } from './lib/error404.js';
import { createUser, logInEmailPass, authGitHub, authGoogle, authFacebook } from './userFireBase.js';

const rootDiv = document.getElementById('root');
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render =  async () => {
    let viewWelcome = logIn;
    rootDiv.innerHTML = await (viewWelcome);
    let route = location.hash;
    router(route);
};

// Renderiza las páginas de acuerdo al hash de cada página
const routes = {
  '#/signup/': signUp,
  '#/': home,
};
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga

//  Renderiza el componente de la primera página cuando ésta carga
function router() {
  const { hash } = window.location;
  if (Object.keys(routes).includes(hash)) {
    rootDiv.innerHTML = routes[hash]; // routes['#/signup']
  } /* else if (hash !== '') {
    rootDiv.innerHTML = error404;
  } */
  } else if (hash !== '') {
    rootDiv.innerHTML = error404;
  }

const render = () => {
  const viewWelcome = logIn;
  rootDiv.innerHTML = viewWelcome;
  router();
};

function createUser(email, password) {
  console.log('Vamos a crear un usuario');
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert('Revisar usuario en Firebase')
      console.log('Revisar usuario en Firebase');
      // Esto debe de actualizar el nombre del usuario, pero no se en dónde revisarlo en Firebase
      /* result.user.updateProfile({
                displayName: name
            }) */

      // url para redireccionar a nuestra página
      const config = {
        url: 'http://localhost:5000/#/',
      };
      // enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
      result.user
        .sendEmailVerification(config)
        // Aquí va un mensaje de bienvenida y de verificación .then
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.error(error);
      console.log(error.code);
      // Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
      if (error.code === 'auth/email-already-in-use') rootDiv.innerHTML = errorUserAlreadyExists;
      else {
        console.log(error);
      }
    });
}

function logInEmailPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // evaluar si validó su correo
      if (result.user.emailVerified) {
        console.log('Usuario logueado');
        const anclaRoute = document.getElementById('logIn').getAttribute('href');
        console.log(anclaRoute);
        router(anclaRoute);
      } else {
        alert('Ups, no has verificado tu email, revisa tu correo y realiza el proceso de validación');
        // para que no esté logueado aunque los datos sean correctos
        firebase.auth().signOut();
      }
    })
    .catch((error) => {
      // alert('tu cuenta no ha sido registrada');
      console.log(error);
      const verificacion = document.getElementById('error-verificacion');
      console.log(verificacion);
      verificacion.style.display = ('block');
    });
}
const logInData = () => {
  document.getElementById("error--message").style.display="none";
  const formLogIn = document.forms.logInForm;
  const logInGithub = document.getElementById('logInGithub')
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



window.addEventListener('load', () => {
  const logInButton = document.getElementById('logInButton');
  const form = document.forms.logInForm;
  console.log(form);
  console.log(logInButton);
  const btnFecebook = document.getElementById('facebook');
  console.log(btnFecebook);
  logInButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = form.logInEmail.value;
    const password = form.logInPassword.value;
    console.log(email);
    console.log(password);
    logInEmailPass(email, password);
  });
  btnFecebook.addEventListener('click', authFacebook);
});

