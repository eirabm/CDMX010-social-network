export const error404 = `
<div class="error404">
    <figure class="error404-icon">
        <img src="https://user-images.githubusercontent.com/66543426/108579517-c7828480-72ec-11eb-8ac5-113ca9a42b76.png" alt="">
    </figure>
    <p>Error 404</p>
    <p>Página no encontrada</p>
</div>
`;

export const homePage = `
<div class="main-page">
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
<ul class="nav" id="navegador">
          <li>
            <a href="#/" class="active"><i class="fa fa-home"></i>Inicio</a>
          </li>
          <li>
            <a href="#/perfil"><i class="fas fa-user"></i>Perfil</a>
          </li>
          <li>
            <a href="#/new"><i class="far fa-plus-square"></i>Agregar receta</a>
          </li>
          <li>
            <a href="#favoritos/"><i class="fas fa-heart"></i>Mis recetas favoritas</a>
          </li>
          <li>
            <a href="#login/"><i class="fas fa-sign-out-alt"></i>Salir</a>
          </li>
        </ul>
        </div>
      </nav>  
</header>

<div id="paget-container" class="page-container">aqui va el texto</div>
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
