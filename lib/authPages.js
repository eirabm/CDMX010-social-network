export const authPage = `
<div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#" name="signUpForm">
            <h1>Crear cuenta</h1>
                <span>usa tu email para registrarte</span>
                <input type="text" name="signUpName" placeholder="Nombre" required>
                <input type="email" name= "signUpEmail" placeholder="Email" required>
                <input type="password" name= "signUpPassword" placeholder="Password" required>
                <button type="submit">Crear cuenta</button>
                <br>
                <br>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container" id="social-container">
                    <img id= "logInFacebook" src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png">
                    <img id="logInGoogle" src="https://cdn.worldvectorlogo.com/logos/google-icon.svg">
                    <img id="logInGithub" src="https://image.flaticon.com/icons/png/512/25/25231.png">
                </div>
                <span>o usa tu cuenta</span>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button>Ingresar</button>
                <br>
                <br>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
                  <br>
                  <br>
                    <h1>¡Aprende, cocina y comparte!</h1>
                    <p>Únete a nuestra comunidad y comparte tus mejores recetas</p>
                    <button class="chage" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                   <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
                  <br>
                  <br>
                    <h1>¡Aprende, cocina y comparte!</h1>
                    <p>Inicia sesión para seguir compartiendo las mejores recetas</p>
                    <button class="chage" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
`;
