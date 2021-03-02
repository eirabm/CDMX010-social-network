import { authPage } from './lib/authPages.js';
import { perfil, homePost, newRecipePage } from './lib/pages.js';
// import { errorUserAlreadyExists } from './lib/errorUserExists.js';
import {
  authSN, signUp, hasUserAuth, logInEmailPass, salirApp, getData,
} from './lib/authScript.js';
import { newPost, previewIMG, getPosts } from './lib/newPost.js';

const mainPage = document.getElementById('root');
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('contenido');

// new post
function createPost() {
  const submitPost = document.getElementById('newRecipeButton');
  submitPost.addEventListener('click', newPost);
}
// salir de la aplicacion
function salir() {
  const btnSalir = document.getElementById('salir');
  console.log(btnSalir);
  btnSalir.addEventListener('click', salirApp);
}
function initLoginEvent() {
  const socialContainer = document.getElementById('social-container');
  console.log(socialContainer);
  socialContainer.addEventListener('click', authSN);
  const formSignUp = document.getElementById('signUpForm');
  formSignUp.addEventListener('submit', signUp);
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
}

function signInInit() {
  const formSignIn = document.getElementById('signInForm');
  formSignIn.addEventListener('submit', logInEmailPass);
}

function primeraPag() {
  const signUpButton = document.getElementById('signUp');
  console.log(signUpButton);
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const signUpMobile = document.getElementById('sign-up-mobile');
  const signInMobile = document.getElementById('sign-in-mobile');
  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  signUpMobile.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInMobile.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
}
function home() {
  const navTogglerBtn = document.querySelector('.nav-toggler');
  console.log(navTogglerBtn);
  const aside = document.querySelector('.aside');
  const section = document.getElementById('navegador');

  navTogglerBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    section.classList.toggle('open');
  });
}
home();
// rutas de cada pagina del home
const routes = {
  home: () => {
    mainPage.innerHTML = homePost;
    mainContainer.classList.remove('none');
    loginContainer.classList.add('none');
    salir();
    getData((user) => {
      const userPhoto = document.getElementById('foto');
      const photo = user.photoURL;
      console.log(photo);
      userPhoto.src = photo;
    });
    getPosts();
  },
  login: () => {
    loginContainer.innerHTML = authPage;
    initLoginEvent();
    primeraPag();
    signInInit();
    loginContainer.classList.remove('none');
    mainContainer.classList.add('none');
  },
  perfil: () => {
    mainPage.innerHTML = perfil;
    mainContainer.classList.remove('none');
    loginContainer.classList.add('none');
    // const callback = (user) => {console.log(user);}
    getData((user) => {
      const userPhoto = document.getElementById('fotos');
      console.log(userPhoto);
      const userName = document.getElementById('nombre');
      console.log(userName);
      const userEmail = document.getElementById('correo');
      console.log(userEmail);
      const photo = user.photoURL;
      console.log(photo);
      const name = user.displayName;
      console.log(name);
      const email = user.email;
      console.log(email);

      userPhoto.src = photo;
      userName.innerHTML = name;
      userEmail.innerHTML = email;
    });
  },
  new: () => {
    mainPage.innerHTML = newRecipePage;
    mainPage.classList.remove('none');
    loginContainer.classList.add('none');
    previewIMG();
    createPost();
  },
};

// function que limpia la url
const clearPathname = (hash) => hash.replace('#/', '');

// render function
const renderPage = () => {
  hasUserAuth((isAuthenticated) => {
    let hashPath = '';
    if (!isAuthenticated) {
      hashPath = 'login';
      window.location.hash = '#/login';
    } else {
      hashPath = clearPathname(window.location.hash);
      debugger;
      if (!hashPath.length) {
        hashPath = 'home';
      }
    }
    console.log(hashPath);
    debugger;
    const page = routes[hashPath];
    page();
  });
};

// cuando navega
window.addEventListener('hashchange', async () => {
  await renderPage();
});

// cuando carge el sitio
window.onload = async () => {
  await renderPage();
};

// const logInData = () => {
//   document.getElementById('error--message').style.display = 'none';
//   const formLogIn = document.forms.logInForm;
//   const logInGithub = document.getElementById('logInGithub');
//   logInGithub.addEventListener('click', authGitHub);
//   const logInGoogleButton = document.getElementById('logInGoogleButton');
//   logInGoogleButton.addEventListener('click', authGoogle);
//   const btnFecebook = document.getElementById('logInFacebook');
//   btnFecebook.addEventListener('click', authFacebook);
//   formLogIn.addEventListener('submit', () => {
//     const email = formLogIn.logInEmail.value;
//     const password = formLogIn.logInPassword.value;
//     logInEmailPass(email, password);
//   });
// };

// const signUpData = () => {
//   const formSignUp = document.forms.signUpForm;
//   formSignUp.addEventListener('submit', () => {
//     document.getElementById('error--message--signUp').style.display = 'none';
//     const name = formSignUp.signUpName.value;
//     const email = formSignUp.signUpEmail.value;
//     const password = formSignUp.signUpPassword.value;
//     createUser(email, password);
//   });
// };
