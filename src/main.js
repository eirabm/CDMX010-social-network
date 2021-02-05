//import { } from './lib/index.js';
import { homeWelcome } from './homeWelcome.js';

//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
    const homeViewHTML = document.getElementById('root');
    const view = homeWelcome();
    homeViewHTML.innerHTML = await (view);
};

window.addEventListener('load', render);
