// 1. Inicializar animaciones de scroll (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// 2. Referencias a los elementos del DOM
const overlay = document.getElementById('overlay');
const btnEntrar = document.getElementById('btn-entrar');
const audio = document.getElementById('weddingSong');
const playPauseBtn = document.getElementById('playPauseBtn'); // El botón flotante de música

// 3. Lógica del Botón de Entrada (El sobre)
if (btnEntrar) {
    btnEntrar.addEventListener('click', () => {
        console.log("Botón presionado, intentando reproducir audio...");

        // Intentar reproducir el audio
        audio.play().then(() => {
            console.log("Audio reproduciéndose con éxito.");
            if (playPauseBtn) playPauseBtn.innerHTML = "⏸ Pausar Música";
        }).catch(error => {
            console.error("El navegador bloqueó el audio:", error);
        });

        // Ocultar el overlay con una transición suave
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); // Espera a que termine la transición de 1s para quitarlo del DOM

        // Refrescar AOS para que las animaciones de la página principal se activen
        AOS.refresh();
    });
}

// 4. Lógica del botón flotante de Play/Pause (por si quieren silenciar después)
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "⏸ Pausar Música";
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "🎵 Reproducir Canción";
        }
    });
}
