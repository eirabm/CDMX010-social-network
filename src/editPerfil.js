let descripcion;

function addDescriptionPerfil() {
  descripcion = document.getElementById('descripcion').value;
  console.log(descripcion);
}

export const perfilDescripcion = () => {
  addDescriptionPerfil();

  firebase.firestore().collection('perfil').add({
    descripcion,
  });
};
