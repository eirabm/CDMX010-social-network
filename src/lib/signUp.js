export const signUp = `
<div class= "homeWelcome-info-container">
    <div class= "homeWelcome-info-container--background">
        <div class= "homeWelcome-header-container">
            <figure>
                <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png" alt="">
            </figure>
            <p class= "homeWelcome-header_slogan">¡Aprende, cocina y comparte!</p>
            <p class= "homeWelcome-header_invitation">Únete a nuestra comunidad y comparte tus mejores recetas</p>
        </div>
        <div class= "homeWelcome-main-container" id= ".homeWelcome-main-formSignUp-container">
            <figure>
                <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png" alt="">
            </figure>
            <div class= "homeWelcome-main-formSignUp-container">
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
