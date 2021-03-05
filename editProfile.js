import { editProfile } from './lib/pages.js';

export function profileEdit() {
  const btnEdit = document.getElementById('editProfile');
  console.log(btnEdit);

  btnEdit.addEventListener('click', () => {
    const modal = document.getElementById('modals');
    const modalContent = document.getElementById('content');
    modalContent.innerHTML = editProfile;
    modal.classList.toggle('modal-active');
  });
}

// const user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: 'Jane Q. User',
//   photoURL: 'https://example.com/jane-q-user/profile.jpg',
// }).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error happened.
// });
