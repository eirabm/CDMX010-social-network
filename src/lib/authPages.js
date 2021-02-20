export const signUp = `
<div class= "authPage-container">
    <div class= "authPage-header-container">
        <figure>
            <img src="https://user-images.githubusercontent.com/66543426/108579517-c7828480-72ec-11eb-8ac5-113ca9a42b76.png" alt="">
        </figure>
        <p class= "authPage_slogan">¡Aprende, cocina y comparte!</p>
        <p class= "authPage-header-invite">Únete a nuestra comunidad y comparte tus mejores recetas</p>
    </div>
  
    <div class= "authPage-main-container">
      <div class="main-container-line">
            <div class= "form-container">
            <p class="error-message" id="error-signUp">¡Este email ya está registrado!</p>
                <p class="join"> Únete ahora </p> <br>
                <form action="#" onsubmit="return false" name="signUpForm" class= "form">
                    <label for="userName">Escribe tu nombre</label>
                    <input type="text" name="signUpName" id="userName" placeholder= Nombre de usuario required>
                    <label for="signUpEmail">Escribe tu correo</label>
                    <input type="email" name= "signUpEmail" id= "signUpEmail" placeholder= Email required>
                    <label for="signUpPassword">Escribe tu contraseña</label>
                    <input type="password" name= "signUpPassword" id= "signUpPassword" placeholder= Password required>
                    <input class="accessButton" id="signUpButton" type= "submit" href="#/">
                  <br>
                  <br>
                </form>
            </div>
        </div>
    </div>
</div>
`;

export const logIn = `
<div class= "authPage-container">
    <div class= "authPage-header-container">
        <figure>
            <img src="https://user-images.githubusercontent.com/66543426/108579517-c7828480-72ec-11eb-8ac5-113ca9a42b76.png" alt="">
        </figure>
        <p class= "authPage_slogan">¡Aprende, cocina y comparte!</p>
        <p class= "authPage-header-invite">Únete a nuestra comunidad y comparte tus mejores recetas</p>
    </div>

    <div class= "authPage-main-container">
      <div class="main-container-line">
        <div class= "form-container">
        <p class="error-message" id="error-message">El usuario o contraseña son incorrectos, favor de verificarlos</p>
            <form name="logInForm" class= "form">
                <label for="logInEmail">Escribe tu correo</label>
                <input type="email" name= "logInEmail" id= "logInEmail" placeholder= Email required>
                <label for="logInPassword">Escribe tu contraseña</label>
                <input type="password" name= "logInPassword" id= "logInPassword" placeholder= Password required>
                <button class="accessButton" id="logInButton" type= "submit" href="#/">Enviar</button>
            </form>
            <div class= "icons-container">
                <p>Acceder usando:</p>
                <img id= "logInFacebook" src="https://user-images.githubusercontent.com/75234502/106777351-890d7a00-660a-11eb-9dd0-274d161e7242.png" alt="ícono Facebook">
                <img id="logInGithub" src="https://user-images.githubusercontent.com/75234502/107734014-09df0c80-6cc2-11eb-8450-d9511e3d2e2e.png" alt="ícono Twitter">
                <img id="logInGoogleButton" src="https://user-images.githubusercontent.com/75234502/106777436-9aef1d00-660a-11eb-965f-a0c88b46c7ff.png" alt="ícono Gmail">
            </div>
            <p class= "homeWelcome-main--invitation">¿No eres miembro todavía?</p>
            <a href="#/signup/" class= "go-signUp" id= "logIn">Regístrate aquí</a>
        </div>
      </div>
    </div>
  </div>
  `;
