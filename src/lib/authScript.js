export const authGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/';
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/';
})
    .catch((error) => {
      console.log(error);
    });
};

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/';
    })
    .catch((error) => {
      console.log(error);
    });
};
