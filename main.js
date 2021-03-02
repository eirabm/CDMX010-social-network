// Este es el punto de entrada de tu aplicacion
import { authPage } from './lib/authPages.js';
import { profilePage, newRecipePage, postsPage } from './lib/pages.js';
import { createNewPost, previewIMG, getPosts } from './posts.js';
import {
  authSN, signUp, hasUserAuth, logInEmailPass, logOut, getData,
} from './lib/authScript.js';

// page
const mainPage = document.getElementById('root');

// function que limpia la url
const clearPathname = (hash) => hash.replace('#/', '');

// esta función se encarga del render
const renderPage = () => {
  hasUserAuth((isAuthenticated) => {
    let hashPath = '';
    if (!isAuthenticated) {
      hashPath = 'login';
      window.location.hash = '#/login';
    } else {
      hashPath = clearPathname(window.location.hash);
      if (!hashPath.length) {
        hashPath = 'home';
      }
    }
    const page = routes[hashPath];
    page();
  });
};

// cuando la ventana carga
window.onload = async () => {
  await renderPage();
};

// cuando navega
window.addEventListener('hashchange', async () => {
  await renderPage();
});

// salir de la aplicacion
function logOutApp() {
  const btnSalir = document.getElementById('salir');
  btnSalir.addEventListener('click', logOut);
}
