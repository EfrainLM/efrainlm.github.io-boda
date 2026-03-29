// Inicializar animaciones al hacer scroll
AOS.init({ duration: 1000, once: true });

const audio = document.getElementById('weddingSong');
const btn = document.getElementById('playPauseBtn');

// Manejar reproducción (los navegadores bloquean el autoplay)
btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "⏸ Pausar Música";
    } else {
        audio.pause();
        btn.innerHTML = "🎵 Reproducir Canción";
    }
});