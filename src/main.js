// Este es el punto de entrada de tu aplicacion

import { } from './lib/index.js';
import { homeWelcome } from './homeWelcome.js';

//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga
const render = async () => {
  const homeViewHTML = document.getElementById('root');
  const view = homeWelcome();
  homeViewHTML.innerHTML = await (view);
  console.log(document.forms['logInForm']);
};

window.addEventListener('load', render);
