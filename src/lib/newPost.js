let recipeTitle;
let description;
let recipeImageUrl;
function getPostData() {
  recipeTitle = document.getElementById('NewRecipeTitle').value;
  description = document.getElementById('newRecipeDescription').value;
}
export const newPost = (e) => {
  e.preventDefault();
  getPostData();
  firebase.firestore().collection('post').add({
    title: recipeTitle,
    post: description,
    image: recipeImageUrl,
  });
};
export const previewIMG = () => {
  const imgInput = document.getElementById('recipe-image');
  imgInput.addEventListener('change', () => {
    const preview = document.getElementById('imgRecipePreview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      preview.src = reader.result;
      recipeImageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  });
};
function createPost(doc) {
  const postContainer = document.getElementById('post-container');
  const getRecipeTitle = doc.data().title;
  const getRecipeDescription = doc.data().post;
  const getRecipeImg = doc.data().image;
  const recipeID = doc.id;
  const post = `
  <div class="recipe-template" id="${recipeID}">
     <div class="user-data">
     <p>name</p>
  </div>
  <div class="recipe-face front">
  <figure>
    <img src="${getRecipeImg}">
  </figure>
  <div class="recipe-info">
  <h3> ${getRecipeTitle} </h3>
  <textarea readonly>${getRecipeDescription}</textarea>
  </div>
</div>
`;
  postContainer.innerHTML += post;
}
export const getPosts = () => {
  firebase.firestore().collection('post')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        createPost(doc);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
