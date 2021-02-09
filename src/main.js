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
    router();
};

//Renderiza las páginas de acuerdo al hash de cada página
const routes = {
    '#/signup/': signUp,
    '#/': home,
}

function router() {
    let route = location.hash;
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
            //Aquí va un mensaje de bienvenida y de verificación .then
            .catch(error => {
                console.log(error);
            })

        })
        .catch(function (error) {
            console.error(error);
            console.log(error.code);
            //Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
            /*if (error.code == 'auth/email-already-in-use')
            rootDiv.innerHTML = errorUserAlreadyExists;
            else {
                console.log(error);
            }*/
        });
}





