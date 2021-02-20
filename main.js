// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { signUp, logIn } from './lib/authPages.js';
import { authGitHub, authGoogle, authFacebook } from './lib/authScript.js';

const mainPage = document.getElementById('root');

const routes = {
  '#/signup/': signUp,
  '#/login/': logIn,
  '#/': home,
};

myFunction();