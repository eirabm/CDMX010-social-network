export const home = () => {
  const homeView = `
    <div class= "homeWelcome-header-container">
        <figure>
            <img src="" alt="">
        </figure>
        <p>¡Aprende, cocina y comparte!</p>
        <p>Únete a nuestra comunidad y comparte tus mejores recetas</p>
    </div>
    <div class= "homeWelcome-main-container">
        <form action="">
            <p>Escribe tu nombre</p>
            <input type="text">
            <p>Escribe tu correo</p>
            <input type="text">
            <p>Escribe tu contraseña</p>
            <input type="text">
        </form>
        <button>Log in</button>
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <p>¿No eres miembro todavía</p>
        <p>Regístrate aquí</p>
    </div>
    `;
  return homeView;
};
