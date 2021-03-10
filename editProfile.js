export function profileEdit() {
  const btnEdit = document.getElementById('editProfile');
  console.log(btnEdit);
  const nameEdit = document.getElementById('nombre');
  console.log(nameEdit);
  const textProfile = document.getElementById('descriptionProfile');
  console.log(textProfile);
  textProfile.readOnly = true; textProfile.style.border = 'none';
  const btnSave = document.getElementById('saveProfile');
  btnSave.style.display = 'none';

  btnEdit.addEventListener('click', () => {
    console.log('hola');
    btnEdit.style.display = 'none';
    btnSave.style.display = 'block';
    nameEdit.contentEditable = true; nameEdit.style.border = '1.5px solid black';
    textProfile.removeAttribute('readonly'); textProfile.style.border = '1.5px solid black';
  });
  btnSave.addEventListener('click', () => {
    const nameProfileValue = document.getElementsByTagName('h1')[0].innerHTML;
    console.log(nameProfileValue);
    const descripcionValueEdit = textProfile.value;
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: nameProfileValue,
      descripcion: descripcionValueEdit,
    }).then(() => {
      btnEdit.style.display = 'block';
      btnSave.style.display = 'none';
      nameEdit.contentEditable = false; nameEdit.style.border = 'none';
      textProfile.readOnly = true; textProfile.style.border = 'none';
      console.log(user.display, user.descripcion);
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  });
}
