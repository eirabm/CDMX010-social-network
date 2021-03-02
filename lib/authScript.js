/* eslint-disable no-undef */
export const signUp = (e) => {
  e.preventDefault();

  document.getElementById('verification').style.display = 'none';
  document.getElementById('already-user').style.display = 'none';

  const email = signUpForm.signUpEmail.value;
  const password = signUpForm.signUpPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // url para redireccionar a nuestra página
      const config = {
        url: 'http://localhost:5000/',
      };
        //  enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
      result.user.sendEmailVerification(config)
        .then(() => {
          document.getElementById('verification').style.display = 'block';
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        document.getElementById('already-user').style.display = 'block';
      }
    });
};

export const logInEmail = (e) => {
  e.preventDefault();
  document.getElementById('error-verification').style.display = 'none';
  document.getElementById('user-not-found').style.display = 'none';

  const email = logInForm.logInEmail.value;
  const password = logInForm.logInPassword.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      //  evaluar si validó su correo
      if (result.user.emailVerified) {
        window.location.hash = '#/';
      } else {
        document.getElementById('error-verification').style.display = 'block';
        //  para que no esté logueado aunque los datos sean correctos
        firebase.auth().signOut();
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        document.getElementById('user-not-found').style.display = 'block';
      }
    });
};

export const authSN = () => {
  const logInGithub = document.getElementById('logInGithub');
  logInGithub.addEventListener('click', () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const logInGoogleButton = document.getElementById('logInGoogle');
  logInGoogleButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const btnFecebook = document.getElementById('logInFacebook');
  btnFecebook.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const hasUserAuth = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

export const getData = (callback) => {
  // callback ======== (user) => {...}
  firebase.auth().onAuthStateChanged(callback);
};

export const logOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.hash = '#/login';
  }).catch((error) => {
    console.log(error);
  // An error happened.
  });
};
