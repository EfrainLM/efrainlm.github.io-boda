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
        // 1. Configurar el inicio de la canción (Saltar los 2 segundos de vacío)
        audio.currentTime = 4; // Salta directamente al segundo 2
        audio.volume = 0;      // Empezamos en silencio para el fade-in

        audio.play().then(() => {
            // 2. Efecto Fade-In (Subir el volumen gradualmente en 2 segundos)
            let fadeInInterval = setInterval(() => {
                // Incrementamos el volumen de 0.05 en 0.05
                if (audio.volume < 0.95) {
                    audio.volume += 0.05;
                } else {
                    audio.volume = 1;
                    clearInterval(fadeInInterval); // Detener el intervalo cuando llegue al máximo
                }
            }, 100); // Se ejecuta cada 100ms (el fade dura aprox 2 segundos)

            if (playPauseBtn) playPauseBtn.innerHTML = "⏸ Pausar Música";
        }).catch(error => {
            console.error("Error al reproducir:", error);
        });

        // 3. Ocultar el sobre (overlay)
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);

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
