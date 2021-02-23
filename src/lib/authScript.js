export const signUp = () => {
  const name = formSignUp.signUpName.value;
  const email = formSignUp.signUpEmail.value;
  const password = formSignUp.signUpPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('Revisar usuario en Firebase');
      alert('Bienvenido a Chop, tu cuenta ha sido creada');

      // url para redireccionar a nuestra página
      const config = {
        url: 'http://localhost:5000/',
      };
        //  enviar un mensaje de verificación al usuario y redireccionarlo a nuestra página
      result.user.sendEmailVerification(config)
        .then((result) => {
          alert('Se te ha enviado un correo para que puedas verificar tu cuenta y acceder a nuestra app');
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
    console.log('estas re wey');
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

export const logInEmailPass = () => {


  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      //  evaluar si validó su correo
      if (result.user.emailVerified) {
        console.log('Usuario logueado');
        window.location.hash = '#/';
      } else {
        alert('Ups, no has verificado tu email, revisa tu correo y realiza el proceso de validación');
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