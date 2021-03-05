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

const addLike = (postID, user) => firebase.firestore().collection('post').doc(postID)
  .update({
    likes: firebase.firestore.FieldValue.arrayUnion(user),
  });

async function createPost(doc) {
  let actualUserID;

  await (getData((user) => {
    actualUserID = user.uid;
  }));

  let numberLikes;
  const likes = doc.data().likes;

  likes !== undefined ? numberLikes = likes.length : numberLikes = '0';

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
     <div class="iconos">
     <p><i class="fas fa-pencil-alt"></i></p> 
     <p class="btn-delete" data-id="${recipeID}"><i class="fas fa-trash-alt" data-id="${recipeID}"></i></p>
     </div>
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
  <span class ="like"><i class="fas fa-heart"></i>${numberLikes > 0 ? numberLikes : '0'}</span> <span id="comment"><i class="far fa-comment"></i></span>
</div>
`;

  postContainer.innerHTML += post;

  const btns = document.querySelectorAll('.btn-delete');
  btns.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await deletePost(e.target.parentElement.getAttribute('data-id'));
    });
  });

  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await addLike(e.target.parentElement.parentElement.getAttribute('data-id'), actualUserID);
    });
  });
}

export const getPosts = () => {
  firebase.firestore().collection('post')
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          createPost(change.doc);
        } else if (change.type === 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};

export const getLikedPosts = async () => {
  let actualUserID;

  await (getData((user) => {
    actualUserID = user.uid;
  }));

  firebase.firestore().collection('post').where('likes', 'array-contains', actualUserID)
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          createPost(change.doc);
        } else if (change.type === 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};
