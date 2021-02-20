export const signUp = `
<div class= "homeWelcome-info-container">
    <div class= "homeWelcome-info-container--background">
        <div class= "homeWelcome-header-container">
            <figure>
                <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-19png1b02855d50." alt="">
            </figure>
            <p class= "homeWelcome-header_slogan">¡Aprende, cocina y comparte!</p>
            <p class= "homeWelcome-header_invitation">Únete a nuestra comunidad y comparte tus mejores recetas</p>
        </div>
        <div class= "homeWelcome-main-container" id= ".homeWelcome-main-formSignUp-container">
            <figure>
                <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png" alt="">
            </figure>
            <div class= "homeWelcome-main-formSignUp-container">
            <p class="error--message" id="error--message--signUp">¡Este email ya está registrado!</p>
                <p> Únete ahora </p> <br>
                <form action="#" onsubmit="return false" name="signUpForm" class= "homeWelcome-main-form">
                    <label for="userName">Escribe tu nombre</label>
                    <input type="text" name="signUpName" id="userName" placeholder= Nombre de usuario required>
                    <label for="signUpEmail">Escribe tu correo</label>
                    <input type="email" name= "signUpEmail" id= "signUpEmail" placeholder= Email required>
                    <label for="signUpPassword">Escribe tu contraseña</label>
                    <input type="password" name= "signUpPassword" id= "signUpPassword" placeholder= Password required>
                    <input class="signUpButton" id="signUpButton" type= "submit" href="#/">
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
    <div class= "logIn-form-container">
    <p class="error-message" id="error-message">El usuario o contraseña son incorrectos, favor de verificarlos</p>
        <form name="logInForm" class= "logIn-form">
            <label for="logInEmail">Escribe tu correo</label>
            <input type="email" name= "logInEmail" id= "logInEmail" placeholder= Email required>
            <label for="logInPassword">Escribe tu contraseña</label>
            <input type="password" name= "logInPassword" id= "logInPassword" placeholder= Password required>
            <button class="accessButton" id="logInButton" type= "submit" href="#/">Enviar</button>
        </form>
        <div class= "homeWelcome-main--icons-container">
            <p>Acceder usando:</p>
            <img id= "logInFacebook" src="https://user-images.githubusercontent.com/75234502/106777351-890d7a00-660a-11eb-9dd0-274d161e7242.png" alt="ícono Facebook">
            <img id="logInGithub" src="https://user-images.githubusercontent.com/75234502/107734014-09df0c80-6cc2-11eb-8450-d9511e3d2e2e.png" alt="ícono Twitter">
            <img id="logInGoogleButton" src="https://user-images.githubusercontent.com/75234502/106777436-9aef1d00-660a-11eb-965f-a0c88b46c7ff.png" alt="ícono Gmail">
        </div>
        <p class= "homeWelcome-main--invitation">¿No eres miembro todavía?</p>
        <a href="#/signup/" class= "homeWelcome-main--signUp" id= "logIn">Regístrate aquí</a>
    </div>
</div>
</div>
    `;
