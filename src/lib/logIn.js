export const logIn = () => {
    const logIn = `
    <div class= "homeWelcome-info-container">
        <div class= "homeWelcome-info-container--background">
            <div class= "homeWelcome-header-container">
                <figure>
                    <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png" alt="">
                </figure>
                <p class= "homeWelcome-header_slogan">¡Aprende, cocina y comparte!</p>
                <p class= "homeWelcome-header_invitation">Únete a nuestra comunidad y comparte tus mejores recetas</p>
            </div>
            <div class= "homeWelcome-main-container">
                <figure>
                    <img src="https://user-images.githubusercontent.com/75234502/106777987-1d77dc80-660b-11eb-8d01-191b02855d50.png" alt="">
                </figure>
                <div class= "homeWelcome-main-form-container">
                    <form name="logInForm" class= "homeWelcome-main-form">
                        <label for="logInEmail">Escribe tu correo</label>
                        <input type="email" name= "logInEmail" id= "logInEmail" placeholder= Email required>
                        <label for="logInPassword">Escribe tu contraseña</label>
                        <input type="password" name= "logInPassword" id= "logInPassword" placeholder= Password required>
                        <button id="logInButton"><a href="#/" id="logIn">Iniciar sesión</a></button>
                    </form>
                    <div class= "homeWelcome-main--icons-container">
                        <p>Acceder usando:</p>
                        <a href="#logFacebook"><img src="https://user-images.githubusercontent.com/75234502/106777351-890d7a00-660a-11eb-9dd0-274d161e7242.png" alt="ícono Facebook"></a>
                        <a href="#logInstagram"><img src="https://user-images.githubusercontent.com/75234502/106777620-c3771700-660a-11eb-9e26-e581a32440f3.png" alt="ícono Instagram"></a>
                        <a href="#logGmail"><img src="https://user-images.githubusercontent.com/75234502/106777436-9aef1d00-660a-11eb-965f-a0c88b46c7ff.png" alt="ícono Gmail"></a>
                    </div>
                    <p class= "homeWelcome-main--invitation">¿No eres miembro todavía?</p>
                    <a href="#/signup/" class= "homeWelcome-main--signUp" id= "logIn">Regístrate aquí</a>
                </div>
            </div>
        </div>
    </div>
    `;
    return logIn;
};
