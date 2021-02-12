// import { } from './lib/index.js';
import { logIn } from './lib/logIn.js';
import { signUp } from './lib/signUp.js';
import { home } from './lib/home.js';
import { error404 } from './lib/error404.js';
import { errorUserAlreadyExists } from './lib/errorUserExists.js';
// import {routes} from './routes.js';

const rootDiv = document.getElementById('root');

// Renderiza las páginas de acuerdo al hash de cada página
const routes = {
  '#/signup/': signUp,
  '#/': home,
};

function router(route) {
  if (Object.keys(routes).includes(route)) {
    rootDiv.innerHTML = routes[route]; // routes['#/signup']
  } else if (route !== '') {
    rootDiv.innerHTML = error404;
  }
}
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
  const viewWelcome = logIn();
  rootDiv.innerHTML = await (viewWelcome);
  const route = window.location.hash;
  router(route);
};

window.addEventListener('load', render);
window.addEventListener('hashchange', render);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#/signup/') {
    const signUpButton = document.getElementById('signUpButton');
    const form = document.forms.signUpForm;
    signUpButton.addEventListener('click', getUserInfo (event) {
            event.preventDefault();
            document.getElementById("error--message--signUp").style.display="none";

            const name = form['signUpName'].value;
            const email = form['signUpEmail'].value;
            const password = form['signUpPassword'].value;

            createUser(email, password);
        });
    }
})

function createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            alert('Bienvenido a Chop, tu cuenta ha sido creada')
            //Esto debe de actualizar el nombre del usuario, pero no se en dónde revisarlo en Firebase
            /*result.user.updateProfile({
                displayName: name
            })*/

            // url para redireccionar a nuestra página
            const config = {
                url: 'http://localhost:5000/'
            }
            //enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
            result.user.sendEmailVerification(config)
            .then(result => {
                alert('Se te ha enviado un correo para que puedas verificar tu cuenta y acceder a nuestra app')
            })
            .catch(error => {
                console.log(error);
            })

        })
        .catch(function (error) {
            console.log(error.code);
            //Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
            //En este caso, avisa de que ya existe un usuario
            if (error.code == 'auth/email-already-in-use')
            document.getElementById("error--message--signUp").style.display="block";
            else {
                console.log(error.message);
            }
        });
}

window.addEventListener('load', function() {
    document.getElementById("error--message").style.display="none";

        let logInButton = document.getElementById('logInButton');
        let form = document.forms.logInForm; 
        logInButton.addEventListener('click', function getUserInfo (event) {
            event.preventDefault();
            const email = form['logInEmail'].value;
            const password = form['logInPassword'].value;
            logInEmailPass(email, password);
    })

        let logInGoogleButton = document.getElementById("logInGoogle")
        logInGoogleButton.addEventListener('click', function(){
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((result) => {
                let credential = result.credential;
                let user = result.user;

                let accessToken = credential.accessToken;
            })  }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
              });
        
})

function logInEmailPass (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then (result => {
        //evaluar si validó su correo
        if(result.user.emailVerified) {
            console.log("Usuario logueado");
            let anclaRoute = document.getElementById('logIn').getAttribute("href");
            console.log(anclaRoute);
            router(anclaRoute);
        }
        else {
            alert('Ups, no has verificado tu email, revisa tu correo y realiza el proceso de validación');
            //para que no esté logueado aunque los datos sean correctos
            firebase.auth().signOut();
        }
    })
    .catch (error => {
        console.log(error);
        document.getElementById("error--message").style.display="block";
    })

}ss