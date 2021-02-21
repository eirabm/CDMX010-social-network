export const homePage = `
<header> 
  <img src="https://user-images.githubusercontent.com/66543426/108579517-c7828480-72ec-11eb-8ac5-113ca9a42b76.png">
  </>
 <img src="" alt=""/>
 <div class="tittle">
  <h1>¡Aprende, cocina y comparte!</h1>
  <p> Únete a nuestra comunidad para compartir tus mejores recetas</>
  </div>
 <nav class="nav-header">
  <label for="toggle" class="toggle-btn">
      <span></span>
      <span></span>
      <span></span>    
     </label> 
      <input type="checkbox" id="toggle"/>
        
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
<section>
<article class="information-people">
    <figure>
      <img id ="perfil-desktop" src="https://www.softzone.es/app/uploads/2018/04/guest.png" alt="">
    </figure>
    <div class="people-datos">
      <h2 id ="name"></h2>
      <p id ="email"></p>
    </div>
    <ul class= "home-main-profile_options">
      <li><a href= "#/profile/">Mi perfil</a></li>
      <li><a href = "#/posts/">Mis post</a></li>
      <li><a href= "#/favorites/">Mis likes</a></li>
      <li class="signOut">Salir</li>
    </ul>
  </article>



  <nav class = "nav-footer">
    <img class="search" src="https://user-images.githubusercontent.com/66543426/108606335-38727c80-737f-11eb-8b4e-c358ee4ed4ee.png" alt="">
    <img class="home" src="https://user-images.githubusercontent.com/66543426/108606367-5b049580-737f-11eb-87c6-7b7d357684af.png" alt="">
    <img class="add" src="https://user-images.githubusercontent.com/66543426/108606384-740d4680-737f-11eb-9ea5-499edfc1316a.png" alt="">
  </nav>
`;

export const perfilpage = `
<header>
    <img class="chop"
      src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png"
      alt="">
    <div class ="tittle">
      <h1>¡Aprende, cocina y comparte!</h1>
      <p>Únete a nuestra comunidad y comparte tus mejores recetas</p>
      </div>
    <div class="perfil" id="id">
    </div>
    <img id="btn-menu" class="menu" src="./icons/bars-solid.svg" alt="">
  </header>
  <nav>
    <img class="search" src="./icons/search-solid.svg" alt="">
    <img class="home" src="./icons/home-solid.svg" alt="">
    <img class="add" src="./icons/plus-circle-solid.svg" alt="">
  </nav>
  <div id="open" class="disable-menu-desplegable">
  <ul>
   <li>Mi perfil</li>
    <li>Mis post</li>
    <li>Mis likes</li>
    <li>Salir</li>
  </ul>
  </div>
  <section>
  <article class="information-people">
    <figure>
      <img src="" alt="">
    </figure>
    <div>
      <h2>Nombre del usuario</h2>
    </div>
    <ul>
      <li>Mi perfil</li>
      <li>Mis post</li>
      <li>Mis likes</li>
      <li>Salir</li>
    </ul>
  </article>
  <article>
  <h2>post</h2>
  </article>
  </section>
`;
