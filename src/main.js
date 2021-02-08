// import { } from './lib/index.js';
import { homeWelcome } from './homeWelcome.js';
import { singUp } from './singUp.js';
import { home } from './home.js';
//  Muestra, imprime o renderiza el componente de la primera página cuando ésta carga

const rootDiv = document.getElementById('root');
const render = async () => {
  const view = homeWelcome();
  rootDiv.innerHTML = await (view);
  router();
};
const routes = {
  '#/signUp': singUp,
  '#/': home,
};
function router() {
  const route = location.hash;
  if (Object.keys(routes).includes(route)) {
    rootDiv.innerHTML = routes[route];
  }
}
window.addEventListener('load', render);
window.addEventListener("hashchange", render);