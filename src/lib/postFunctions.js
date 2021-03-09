export const editPost = (id) => {
  const recipes = document.getElementById('post-container');
  const post = recipes.querySelector(`[data-id=${id}]`);

  const editedTitle = post.querySelector('[id=recipeTitle]');
  const editedDescription = post.querySelector('[id=recipeDescription]');
  post.querySelector('.recipe-template .edit-buttons').style.display = 'block';

  editedTitle.contentEditable = true; editedTitle.style.border = '1.5px solid black';
  editedDescription.removeAttribute('readonly'); editedDescription.style.border = '1.5px solid black';

  const saveNewDataBtn = post.querySelector('[id=saveChanges]');
  saveNewDataBtn.addEventListener('click', () => {
    const editedTitleValue = post.getElementsByTagName('h3')[0].innerHTML;
    const editedDescriptionValue = editedDescription.value;

    firebase.firestore().collection('post').doc(id)
      .update({
        title: editedTitleValue,
        post: editedDescriptionValue,
      });
  });

  const cancel = post.querySelector('[id=cancelChanges]');
  cancel.addEventListener('click', () => {
    editedTitle.contentEditable = false; editedTitle.style.border = 'none';
    editedDescription.readOnly = true; editedDescription.style.border = 'none';
    post.querySelector('.recipe-template .edit-buttons').style.display = 'none';
  });
};
