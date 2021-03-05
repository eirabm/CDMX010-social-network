import { getData } from './lib/authScript.js';

let userIMG;
let userName;
let recipeTitle;
let vegetarian;
let description;
let recipeImageUrl;

async function getPostData() {
  await (getData((user) => {
    userIMG = user.photoURL;
    userName = user.displayName;
  }));

  document.getElementById('isVegetarian').checked ? vegetarian = 'vegetarian' : vegetarian = 'not vegetarian';
  recipeTitle = document.getElementById('NewRecipeTitle').value;
  description = document.getElementById('newRecipeDescription').value;
}

async function createNewPost(e) {
  e.preventDefault();
  await (getPostData());

  firebase.firestore().collection('post').add({
    user: userName,
    userPic: userIMG,
    title: recipeTitle,
    post: description,
    vegetal: vegetarian,
    image: recipeImageUrl,
  });

  window.location.hash = '#/';
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

const deletePost = (id) => firebase.firestore().collection('post').doc(id).delete();

function createPost(doc) {
  const postContainer = document.getElementById('post-container');
  const getUserIMG = doc.data().userPic;
  const getUserName = doc.data().user;
  const getRecipeTitle = doc.data().title;
  const getRecipeDescription = doc.data().post;
  const getRecipeImg = doc.data().image;
  const itIsVegetarian = doc.data().vegetal;
  const recipeID = doc.id;

  const post = `
  <div class="recipe-template" data-id="${recipeID}">
     <div class="user-data">
     <img src="${getUserIMG}">
     <p>${getUserName}</p>
    </div>
    <div class="recipe-face front">
    <figure>
    <img src="${getRecipeImg}">
    </figure>
    <div class="recipe-info">
    <h3> ${getRecipeTitle} <span>${itIsVegetarian === 'vegetarian' ? `<i class="fas fa-leaf"></i>` : ''} </span> </h3> 
    <textarea readonly>${getRecipeDescription}</textarea>
    </div>
    </div>
  <button class="btn-delete">Eliminar</button>
</div>
`;

  postContainer.innerHTML += post;

  const btns = document.querySelectorAll('.btn-delete');
  btns.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await deletePost(e.target.parentElement.getAttribute('data-id'));
    });
  });
}

export const getPosts = () => {
  firebase.firestore().collection('post')
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type == 'added') {
          createPost(change.doc);
        } else if (change.type == 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};