// Inicializar animaciones al hacer scroll
AOS.init({ duration: 1000, once: true });

const overlay = document.getElementById('overlay');
const btnEntrar = document.getElementById('btn-entrar');
const audio = document.getElementById('weddingSong');

btnEntrar.addEventListener('click', () => {
    // 1. Reproducir audio (Ahora sí el navegador lo permite)
    audio.play();
    
    // 2. Desvanecer la pantalla de bienvenida
    overlay.classList.add('fade-out');
    
    // Opcional: Iniciar las animaciones de AOS después del clic
    AOS.refresh();
});
