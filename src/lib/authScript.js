export const signUp = (e) => {
  e.preventDefault();
  const formSignUp = document.forms.signUpForm;
  // const name = formSignUp.signUpName.value;
  const email = formSignUp.signUpEmail.value;
  const password = formSignUp.signUpPassword.value;

  console.log({ email, password });

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // url para redireccionar a nuestra página
      const config = {
        url: 'http://localhost:5000/#/login',
      };
      //  enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
      result.user
        .sendEmailVerification(config)
        .then((result) => {
          alert(
            'Se te ha enviado un correo para que puedas verificar tu cuenta y acceder a nuestra app',
          );
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.error(error);
      console.log(error.code);
      //  Esto es para crear mensaje de error para avisar al usuario en caso de que algo salga mal
      //  En este caso, avisa de que ya existe un usuario
      if (error.code === 'auth/email-already-in-use') {
        console.log(error);
        document.getElementById('error--message--signUp').style.display = 'block';
      } else {
        console.log(error);
        console.log(error.message);
      }
    });
};

export const authSN = () => {
  const logInGithub = document.getElementById('logInGithub');
  logInGithub.addEventListener('click', () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
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
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const btnFecebook = document.getElementById('logInFacebook');
  btnFecebook.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        window.location.hash = '#/';
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const logInEmailPass = (e) => {
  e.preventDefault();
  const formSignIn = document.forms.signInForm;
  const email = formSignIn.signInEmail.value;
  const password = formSignIn.signInPassword.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      //  evaluar si validó su correo
      if (result.user.emailVerified) {
        console.log('Usuario logueado');
        window.location.hash = '#/';
      } else {
        alert(
          'Ups, no has verificado tu email, revisa tu correo y realiza el proceso de validación',
        );
        //  para que no esté logueado aunque los datos sean correctos
        firebase.auth().signOut();
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        alert('Usuario no encontrado');
        document.getElementById('error--message').style.display = 'block';
      }
    });
};

export const getData = (callback) => {
  // callback ======== (user) => {...}
  firebase.auth().onAuthStateChanged(callback);
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

export const salirApp = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log('salir');
    window.location.hash = '#/login';
  }).catch((error) => {
    console.log(error);
  // An error happened.
  });
};
