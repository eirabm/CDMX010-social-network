export const homePage = `
<div class="main-container" id="contenido">
     <!--aside-->
     <div class="aside" id="menu">
         <!--lago-->
         <div class="logo" id="logotipo">
             <a href="#">
                  <img src="https://user-images.githubusercontent.com/66543426/108579517-c7828480-72ec-11eb-8ac5-113ca9a42b76.png" alt=""></a>
         </div>
        <div class="nav-toggler" id="icono-menu">
             <span></span>
         </div>
         <ul class="nav" id="navegador">
             <li><a href="#/" class="active"><i class="fa fa-home"></i>Inicio</a></li>
             <li><a href="#perfil/"><i class="fas fa-user"></i>Perfil</a></li>
             <li><a href="#agregar/"><i class="far fa-plus-square"></i>Agregar receta</a></li>
             <li><a href="#favoritos/"><i class="fas fa-heart"></i>Mis recetas favoritas</a></li>
             <li><a href="#login/"><i class="fas fa-sign-out-alt"></i>Salir</a></li>
         </ul>
     </div>
     <div class="section" id="home">
         <section class="perfil section">
             <div class="container" id="pages">
                 <div class="intro">
                     <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="shadow-dark">
                     <h1>nombre</h1>
                     <p>correo</p>
                     <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
                     <br>
                     <button>Editar</button>
                 </div>

             </div>
         </section>
     </div>
 </div>
`;
