export const signUp = (email, password) => {
  document.getElementById('verification').style.display = 'none';
  document.getElementById('already-user').style.display = 'none';

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

export const logInEmail = (email, password) => {
  document.getElementById('error-verification').style.display = 'none';
  document.getElementById('user-not-found').style.display = 'none';

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
