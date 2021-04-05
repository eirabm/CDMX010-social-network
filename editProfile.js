import { getData } from './lib/authScript.js';

export function profileEdit() {
  let actualUserID;

  const userPhoto = document.getElementById('profilePicture');
  const userName = document.getElementById('nombre');
  const userEmail = document.getElementById('correo');
  const userDescription = document.getElementById('descriptionProfile');

  getData((user) => {
    const photo = user.photoURL;
    const name = user.displayName;
    const email = user.email;
    actualUserID = user.uid;

    (photo == 'undefined' ? '' : userPhoto.src = photo)
    userName.innerHTML = name;
    userEmail.innerHTML = email;
  });

  async function otherData() {
    await getData;

    firebase.firestore().collection('profile').doc(actualUserID)
      .get()
      .then((doc) => {
        console.log(doc.data());
        const description = doc.data().description;

        if (description === undefined) {
          userDescription.innerHTML = '';
        } else {
          userDescription.innerHTML = description;
        }
      });
  }

  otherData();

  const btnEdit = document.getElementById('editProfile');
  btnEdit.addEventListener('click', () => {
    userName.contentEditable = true; userName.style.border = '1.5px solid black';
    userDescription.removeAttribute('readonly'); userDescription.style.border = '1.5px solid black';
    document.querySelector('.edit-buttons').style.display = 'block';
  });

  const saveChangesBtn = document.getElementById('saveChanges');
  saveChangesBtn.addEventListener('click', () => {
    const nameProfileValue = document.getElementsByTagName('h1')[0].innerHTML;
    firebase.auth().currentUser
      .updateProfile({
        displayName: nameProfileValue,
      }).then(() => {
        const descriptionValue = userDescription.value;
        console.log(descriptionValue);
        firebase.firestore().collection('profile').doc(actualUserID)
          .set({
            description: descriptionValue,
          });
      }).then(() => {
        userName.contentEditable = false; userName.style.border = 'none';
        userDescription.readOnly = true; userDescription.style.border = 'none';
        document.querySelector('.edit-buttons').style.display = 'none';
      });
  });

  const deleteChangesBtn = document.getElementById('cancelChanges');
  deleteChangesBtn.addEventListener('click', () => {
    userName.contentEditable = false; userName.style.border = 'none';
    userDescription.readOnly = true; userDescription.style.border = 'none';
    document.querySelector('.edit-buttons').style.display = 'none';
  })
}
