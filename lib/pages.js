export const homePage = `
<header> 
      <div class="logo">
          <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
      </div>

      <nav class="nav-header">
        
      <label for="toggle" class="toggle-btn">
      <span></span>
      <span></span>
      <span></span>    
     </label> 
      <input type="checkbox" id="toggle">
        
        <div class="nav-info">
        <ul>
          <li><p>Perfil</p></li>
          <li><p>Sale</p></li>
          <li><p>Sucursales</p></li>
          <li><p>Salir</p></li>
        </ul>
        </div>
      </nav>  
</header>

<div id="post-container"></div>

<div>
  <nav class= "nav-footer">
    <img class="search" src="https://user-images.githubusercontent.com/66543426/108606335-38727c80-737f-11eb-8b4e-c358ee4ed4ee.png" alt="">
    <img class="home" src="https://user-images.githubusercontent.com/66543426/108606990-44603d80-7383-11eb-9dc6-1133b0ee044e.png" alt="">
    <img class="add" src="https://user-images.githubusercontent.com/66543426/108606384-740d4680-737f-11eb-9ea5-499edfc1316a.png" alt="">
  </nav>
  </div>
`;

export const profilePage = `
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
      <button>Subir receta</button>
    </form>
</div>
`;
