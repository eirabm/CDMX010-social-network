// import { } from './lib/index.js';
import { homeWelcome } from './homeWelcome.js';

//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga

const rootDiv = document.getElementById('root');
const render = async () => {
  const view = homeWelcome();
  rootDiv.innerHTML = await (view);
};

window.addEventListener('load', render);
