export const perfil = `
<section class="perfil section">
             <div class="container" id="perfil-usuario">
                 <div class="intro">
                     <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="shadow-dark">
                     <h1>nombre</h1>
                     <p>correo</p>
                     <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
                     <br>
                     <button>Editar</button>
                 </div>
</section>
`;

export const newRecipePage = `
<div class= "new-recipe-container">
  <h1 class="new-recipe-title"> Nueva receta </h1> <br>
    <form action="#" name="newRecipeForm" class= "new-recipe-form">
      <label for="newRecipeTitle">Escribe el título de la receta</label>
      <input type="text" name="newRecipeTitle" id="NewRecipeTitle" placeholder= "Ej. Buñuelos" required>
      <label for="newRecipeDescription">Descripción de tu receta</label>
      <textarea name= "newRecipeDescription" id= "newRecipeDescription" placeholder= "describe brevemente tu receta" required></textarea>
      <button id="newRecipeButton">Subir receta</button>
    </form>
</div>
`;
