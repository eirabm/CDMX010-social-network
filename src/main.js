// import { } from './lib/index.js';
import { logIn } from './lib/logIn.js';
import { signUp } from './lib/signUp.js';
import { home } from './lib/home.js';
<<<<<<< HEAD
import { error404 } from './lib/error404.js';
// import { errorUserAlreadyExists } from './lib/errorUserExists.js';
=======
// import { error404 } from './lib/error404.js';
import { errorUserAlreadyExists } from './lib/errorUserExists.js';
// import { modalOne } from './modal.js';
>>>>>>> linnette
// import {routes} from './routes.js';

const rootDiv = document.getElementById('root');

// Renderiza las páginas de acuerdo al hash de cada página
const routes = {
  '#/signup/': signUp,
  '#/': home,
};
<<<<<<< HEAD

function router(route) {
  if (Object.keys(routes).includes(route)) {
    rootDiv.innerHTML = routes[route]; // routes['#/signup']
  } else if (route !== '') {
    rootDiv.innerHTML = error404;
  }
=======
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
function router() {
  const { hash } = window.location;
  if (Object.keys(routes).includes(hash)) {
    rootDiv.innerHTML = routes[hash]; // routes['#/signup']
  } /* else if (hash !== '') {
    rootDiv.innerHTML = error404;
  } */
>>>>>>> linnette
}
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
  const viewWelcome = logIn();
  rootDiv.innerHTML = await (viewWelcome);
  const route = window.location.hash;
  router(route);
};

<<<<<<< HEAD
window.addEventListener('load', render);
window.addEventListener('hashchange', render);

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert('Bienvenido a Chop, tu cuenta ha sido creada');
=======
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
>>>>>>> linnette
      // Esto debe de actualizar el nombre del usuario, pero no se en dónde revisarlo en Firebase
      /* result.user.updateProfile({
                displayName: name
            }) */

      // url para redireccionar a nuestra página
      const config = {
<<<<<<< HEAD
        url: 'http://localhost:5000/',
      };
      // enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
      result.user.sendEmailVerification(config)
        .then((result) => {
          alert('Se te ha enviado un correo para que puedas verificar tu cuenta y acceder a nuestra app');
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error.code);
      // Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
      // En este caso, avisa de que ya existe un usuario
      if (error.code === 'auth/email-already-in-use') document.getElementById('error--message--signUp').style.display = 'block';
      else {
        console.log(error.message);
      }
    });
}
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#/signup/') {
    const signUpButton = document.getElementById('signUpButton');
    const form = document.forms.signUpForm;
    signUpButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('error--message--signUp').style.display = 'none';
      const name = form.signUpName.value;
      const email = form.signUpEmail.value;
      const password = form.signUpPassword.value;

      createUser(email, password);
    });
  }
});

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
      console.log(error);
      document.getElementById('error--message').style.display = 'block';
    });
}

window.addEventListener('load', () => {
  document.getElementById('error--message').style.display = 'none';

  const logInButton = document.getElementById('logInButton');
  const form = document.forms.logInForm;
=======
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

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
    /* @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      const name = result.displayName;
      console.log(name);
      console.log(user);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      console.log(accessToken);
      console.log(result);
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      // console.log(errorCode);
      const errorMessage = error.message;
      // console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // console.log(credential);
    });
}

function authFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
}
window.addEventListener('load', render);
window.addEventListener('hashchange', render);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#/signup/') {
    const signUpButton = document.getElementById('signUpButton');
    const form = document.forms.signUpForm;
    console.log(form);
    signUpButton.addEventListener('click', (event) => {
      event.preventDefault();
      const name = form.signUpName.value;
      const email = form.signUpEmail.value;
      const password = form.signUpPassword.value;
      console.log(name);
      console.log(email);
      console.log(password);
      createUser(email, password);
    });
  }
});

window.addEventListener('load', () => {
  const logInButton = document.getElementById('logInButton');
  const form = document.forms.logInForm;
  console.log(form);
  console.log(logInButton);
  const btnFecebook = document.getElementById('facebook');
  console.log(btnFecebook);
>>>>>>> linnette
  logInButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = form.logInEmail.value;
    const password = form.logInPassword.value;
<<<<<<< HEAD
    logInEmailPass(email, password);
  });

  const logInGoogleButton = document.getElementById('logInGoogle');
  logInGoogleButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const user = result.user;
        const accessToken = credential.accessToken;
      });
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
=======
    console.log(email);
    console.log(password);
    logInEmailPass(email, password);
  });
  btnFecebook.addEventListener('click', authFacebook);
>>>>>>> linnette
});
