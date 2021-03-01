let recipeTitle;
let description;

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
  });
};

function createPost(title, recipeDescription) {
  const postContainer = document.getElementById('root');

  const div = document.createElement('div');
  div.setAttribute('class', 'col-md-4');

  let h2 = document.createElement('h2');
  let p = document.createElement('p');

  h2.textContent = title;
  p.textContent = recipeDescription;

  div.appendChild(h2);
  div.appendChild(p);

  postContainer.appendChild(div);
}

export const getPosts = () => {
  firebase.firestore().collection('post')
    .get()
    .then((snapshot) => {
      console.log(snapshot);

      snapshot.docs.forEach((docs) => {
        console.log(docs);

        createPost(
          docs.data().recipeTitle,
          docs.data().description,
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
};
