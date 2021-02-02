// Este es el punto de entrada de tu aplicacion

import { } from './lib/index.js';
import { home } from './template.js';

const router = async () => {
  console.log('Hola, mundo');
  const homeViewHTML = document.getElementById('root');
  const view = home();
  console.log(view);
  homeViewHTML.innerHTML = await (view);
};

window.addEventListener('load', router);
