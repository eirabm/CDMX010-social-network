// Este es el punto de entrada de tu aplicacion
import { authPage, logInDOM } from './lib/authPages.js';
import {
  profilePage, newRecipePage, postsPage, mainPageContainer,
} from './lib/pages.js';
import { newPost, previewIMG, getPosts } from './posts.js';
import {
  authFunctions, hasUserAuth, logOut, getData,
} from './lib/authScript.js';

// page
const mainPage = document.getElementById('root');

// function que limpia la url
const clearPathname = (hash) => hash.replace('#/', '');

// salir de la aplicacion
function logOutApp() {
  const btnSalir = document.getElementById('salir');
  btnSalir.addEventListener('click', logOut);
}

const routes = {
  home: () => {
    getPosts();
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = postsPage;
    logOutApp();
    getData((user) => {
      const userPhoto = document.getElementById('foto');
      const photo = user.photoURL;
      console.log(photo);
      userPhoto.src = photo;
    });
  },

  login: () => {
    mainPage.innerHTML = authPage;
    logInDOM();
    authFunctions();
  },

  perfil: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = profilePage;
    getData((user) => {
      const userPhoto = document.getElementById('fotos');
      const userName = document.getElementById('nombre');
      const userEmail = document.getElementById('correo');
      const photo = user.photoURL;
      const name = user.displayName;
      const email = user.email;
      userPhoto.src = photo;
      userName.innerHTML = name;
      userEmail.innerHTML = email;
    });
  },

  new: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = newRecipePage;
    previewIMG();
    newPost();
  },
};

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
