
# Birthday Memory Website

Website sederhana bertema ulang tahun untuk Nandini. Halaman ini dibuat sebagai hadiah digital berisi ucapan, countdown ulang tahun, galeri foto kenangan, video yang bisa diputar, musik latar, dan animasi balon/confetti agar terasa lebih hidup.

## Fitur

- Countdown otomatis menuju tanggal ulang tahun.
- Musik latar dengan tombol play/pause.
- Galeri foto kenangan dari folder `assets`.
- Video kenangan yang bisa diputar langsung di halaman.
- Musik otomatis berhenti saat video diputar.
- Animasi balon dan confetti berbasis Lottie.
- Tampilan responsif untuk desktop dan mobile.
- UI bergaya modern portfolio dengan warna pastel pink.

## Struktur File

```text
.
├── assets/
│   ├── birthday-confetti-balloon.json
│   ├── copy_6070F1A3-3101-4DB1-BBC5-4ED64629DAF9.mp4
│   ├── IMG_0159.jpg
│   ├── IMG_0365.JPG
│   ├── IMG_0500.jpg
│   ├── IMG_2726.jpg
│   ├── IMG_2820.jpg
│   └── DJ TRESNO TEKANE MATI NDX AKA VIRAL TIKTOK SLOW FULL SONG MAMAN FVNDY 2025 - (320 Kbps).mp3
├── index.html
├── script.js
├── style.css
└── README.md
```

## Cara Menjalankan

Buka file berikut langsung di browser:

```text
index.html
```

Atau jika menggunakan terminal:

```bash
cd /home/ade/Downloads/untuk_nandini
xdg-open index.html
```

## Catatan

Animasi balon/confetti menggunakan library Lottie dari CDN, jadi koneksi internet diperlukan agar animasi tersebut tampil. Musik tidak otomatis menyala karena browser biasanya memblokir autoplay audio; klik tombol `Putar Musik` untuk menjalankannya.
