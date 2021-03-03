import { getData } from './lib/authScript.js';

let userIMG;
let userName;
let recipeTitle;
let description;
let recipeImageUrl;

function getPostData() {
  recipeTitle = document.getElementById('NewRecipeTitle').value;
  description = document.getElementById('newRecipeDescription').value;

  getData((user) => {
    userIMG = user.photoURL;
    userName = user.displayName;
  });
}

function createNewPost(e) {
  e.preventDefault();
  console.log(getPostData());
  getPostData();

  firebase.firestore().collection('post').add({
    user: userName,
    userPic: userIMG,
    title: recipeTitle,
    post: description,
    image: recipeImageUrl,
  });
}

export const newPost = () => {
  const submitPost = document.getElementById('newRecipeButton');
  submitPost.addEventListener('click', createNewPost);
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
// const deletePost = (id) => firebase.firestore().doc(id).delete();
function createPost(doc) {
  const postContainer = document.getElementById('post-container');
  const getUserIMG = doc.data().userPic;
  const getUserName = doc.data().user;
  const getRecipeTitle = doc.data().title;
  const getRecipeDescription = doc.data().post;
  const getRecipeImg = doc.data().image;
  const recipeID = doc.id;

  const post = `
  <div class="recipe-template" id="${recipeID}">
     <div class="user-data">
     <img src="${getUserIMG}">
     <p>${getUserName}</p>
  </div>
  <div class="recipe-face front">
  <figure>
    <img src="${getRecipeImg}">
  </figure>
  <div class="recipe-info">
  <h3> ${getRecipeTitle} </h3>
  <textarea readonly>${getRecipeDescription}</textarea>
  </div>
  <div>
  <button class="btn-delete" data-id="${recipeID}">Eliminar</button>
  </div>
</div>
`;

  postContainer.innerHTML += post;

  // // eliminar post
  // const btns = document.querySelectorAll('.btn-delete');
  // btns.forEach((elem) => {
  //   elem.addEventListener('click', async (e) => {
  //     await deletePost(e.target.dataset.id);
  //   });
  // });
}

export const getPosts = () => {
  firebase.firestore().collection('post')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        createPost(doc);
        window.location.hash = '#/';
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
