// 1. Hitung Umur Otomatis
const birthYear = 2002;
const currentYear = new Date().getFullYear();
document.getElementById('age').innerText = currentYear - birthYear;

// 2. Countdown ke 16 September
function updateCountdown() {
    const targetDate = new Date(`September 16, ${currentYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    let difference = targetDate - now;

    // Jika tanggal 16 September tahun ini sudah lewat, hitung untuk tahun depan
    if (difference < 0) {
        const nextYear = currentYear + 1;
        difference = new Date(`September 16, ${nextYear} 00:00:00`).getTime() - now;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const countdownElement = document.getElementById('countdown');

    if (days === 0 && hours === 0 && minutes === 0) {
        countdownElement.innerText = "🎉 SELAMAT ULANG TAHUN, NANDINI! 🎉";
    } else {
        countdownElement.innerText = `⏳ ${days} Hari ${hours} Jam ${minutes} Menit menuju hari spesialmu!`;
    }
}

// Jalankan countdown setiap menit
setInterval(updateCountdown, 60000);
updateCountdown();

// 3. Musik latar dan video kenangan
const backgroundMusic = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const memoryVideo = document.getElementById('memory-video');

if (backgroundMusic && musicToggle) {
    backgroundMusic.volume = 0.35;

    function updateMusicButton() {
        if (backgroundMusic.paused) {
            musicToggle.innerText = 'Putar Musik';
            musicToggle.classList.remove('is-playing');
            musicToggle.setAttribute('aria-label', 'Putar musik latar');
        } else {
            musicToggle.innerText = 'Jeda Musik';
            musicToggle.classList.add('is-playing');
            musicToggle.setAttribute('aria-label', 'Jeda musik latar');
        }
    }

    musicToggle.addEventListener('click', async () => {
        if (backgroundMusic.paused) {
            try {
                await backgroundMusic.play();
            } catch (error) {
                musicToggle.innerText = 'Klik untuk Musik';
            }
        } else {
            backgroundMusic.pause();
        }

        updateMusicButton();
    });

    backgroundMusic.addEventListener('play', updateMusicButton);
    backgroundMusic.addEventListener('pause', updateMusicButton);
    updateMusicButton();
}

if (memoryVideo && backgroundMusic) {
    memoryVideo.addEventListener('play', () => {
        backgroundMusic.pause();
    });
}

// 4. Animasi muncul saat halaman discroll
const animatedElements = document.querySelectorAll('.message-section .container, .gallery-section h2, .gallery-item, footer');

animatedElements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index * 80, 480)}ms`;
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.16
});

animatedElements.forEach((element) => {
    revealObserver.observe(element);
});

// 5. Animasi confetti dan balon ulang tahun
const birthdayAnimation = document.getElementById('birthday-animation');

if (birthdayAnimation && window.lottie) {
    window.lottie.loadAnimation({
        container: birthdayAnimation,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/birthday-confetti-balloon.json',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    });
}
