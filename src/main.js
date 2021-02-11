//import { } from './lib/index.js';
import { logIn } from './lib/logIn.js';
import { signUp } from './lib/signUp.js';
import { home } from './lib/home.js';
import { error404 } from './lib/error404.js';
import { errorUserAlreadyExists } from './lib/errorUserExists.js';
//import {routes} from './routes.js';

const rootDiv = document.getElementById('root');
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render =  async () => {
    let viewWelcome = logIn();
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

window.addEventListener('load', render);
window.addEventListener('hashchange', render);

window.addEventListener('hashchange', function() {
    if (location.hash === '#/signup/') {
        let signUpButton = document.getElementById('signUpButton');
        let form = document.forms.signUpForm;
        console.log(form);
        signUpButton.addEventListener('click', function getUserInfo (event) {
            event.preventDefault();
            const name = form['signUpName'].value;
            const email = form['signUpEmail'].value;
            const password = form['signUpPassword'].value;
            console.log(name);
            console.log(email);
            console.log(password);
            createUser(email, password);
        });
    }
})

function createUser(email, password) {
    console.log('Vamos a crear un usuario')
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            console.log('Revisar usuario en Firebase');
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
            console.error(error);
            console.log(error.code);
            //Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
            //En este caso, avisa de que ya existe un usuario
            if (error.code == 'auth/email-already-in-use')
            document.getElementById("error--message--signUp").style.display="block";
            else {
                console.log(error);
                console.log(error.message);
            }
        });
}

window.addEventListener('load', function() {
        let logInButton = document.getElementById('logInButton');
        let form = document.forms.logInForm;
        console.log(form);
        console.log(logInButton);
        logInButton.addEventListener('click', function getUserInfo (event) {
            event.preventDefault();
            const email = form['logInEmail'].value;
            const password = form['logInPassword'].value;
            console.log(email);
            console.log(--password);
            logInEmailPass(email, password);
    })
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

}







