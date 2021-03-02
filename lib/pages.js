export const profilePage = `
<section class="perfil section">
             <div class="container" id="perfil-usuario">
                 <div class="intro">
                     <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="shadow-dark" id="fotos">
                     <h1 id="nombre">nombre</h1>
                     <p id="correo">correo</p>
                     <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
                     <br>
                     <button>Editar</button>
                 </div>
</section>
`;

export const newRecipePage = `
<div class= "new-recipe-container">
  <h1 class="new-recipe-title"> Nueva receta </h1> <br>
  <img src="" id="imgRecipePreview" class="img-preview-recipe">
    <form action="#" name="newRecipeForm" class= "new-recipe-form">
      <label for="imageFile">Selecciona la imagen de tu receta</label>
      <input type="file" id="recipe-image" accept="image/*" required>
      <label for="newRecipeTitle">Escribe el título de la receta</label>
      <input type="text" name="newRecipeTitle" id="NewRecipeTitle" placeholder= "Ej. Buñuelos" required>
      <label for="newRecipeDescription">Descripción de tu receta</label>
      <textarea name= "newRecipeDescription" id= "newRecipeDescription" placeholder= "describe brevemente tu receta" required></textarea>
      <button id="newRecipeButton">Subir receta</button>
    </form>
</div>
`;

export const postsPage = `
<section class="home section">
    <div class="container" id="home-usuario">
        <div class="encabezado">
            <div id="search" class="buscar post">
                <span>Busca la receta que deseas</span>
                <i class="fas fa-search"></i>
                <input type="text" name="buscar" placeholder="Buscar">
            </div>
            <div class="img">
                <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="foto perfil" id="foto">
            </div>
        </div>
        <div id="post-container"></div>
    </div>
</section>
`;
