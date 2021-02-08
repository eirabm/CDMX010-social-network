//import { } from './lib/index.js';
import { logIn } from './logIn.js';
import { signUp } from './signUp.js';
import { home } from './home.js';
import { error404 } from './error404.js';
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
        rootDiv.innerHTML = routes[route];
    } else if (route != "") {
        rootDiv.innerHTML = error404;
    }
}

window.addEventListener('load', render);
window.addEventListener('hashchange', render);