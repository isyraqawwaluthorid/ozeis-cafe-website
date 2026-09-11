# OZEIS CAFE — Website

Website statis (HTML/CSS/JS murni, tanpa build step) untuk OZEIS CAFE by PAS CAFE.

## Isi folder
```
ozeis-cafe-website/
├── index.html      -> semua konten halaman
├── css/style.css    -> styling
├── js/script.js     -> data menu, interaksi (tab, search, nav, scroll animation)
└── README.md
```

## Cara pakai (langsung, tanpa install apa pun)
Buka `index.html` di browser untuk preview lokal.

## Cara hosting (gratis)
Pilih salah satu:

**Netlify (paling gampang)**
1. Buka https://app.netlify.com/drop
2. Drag & drop seluruh folder `ozeis-cafe-website` ke halaman tsb.
3. Selesai — dapat link live dalam hitungan detik. Bisa custom domain di menu Domain settings.

**Vercel**
1. Buat akun di vercel.com → New Project → Upload folder ini (atau hubungkan lewat GitHub).

**GitHub Pages**
1. Push folder ini ke repo GitHub.
2. Settings → Pages → pilih branch `main` folder `/ (root)`.

**Hosting cPanel/shared hosting biasa**
1. Upload semua isi folder ini ke `public_html` (atau subfolder) via FTP/File Manager.

## Yang WAJIB kamu ganti sebelum publish

1. **Alamat lengkap cafe**
   Cari `id="cafe-address"` dan `id="cafe-address-footer"` di `index.html`, ganti teks placeholder dengan alamat asli.

2. **Nomor WhatsApp**
   Cari-ganti semua `6281234567890` di `index.html` dengan nomor WA asli (format `62xxxxxxxxxx` tanpa tanda + atau spasi).

3. **Link Instagram / TikTok**
   Di bagian footer (`<a href="#" aria-label="Instagram">` dan `TikTok`), ganti `#` dengan link akun sosmed asli.

4. **Jam operasional**
   Cari teks "10.00 – 23.00 WIB" (muncul 2x: section Lokasi & footer) dan sesuaikan.

5. **Logo & foto asli (auto-detect, tidak perlu edit kode)**
   Situs ini memakai logo hasil rekonstruksi ulang dalam bentuk SVG (warna oranye `#c1451e`) sebagai placeholder, karena file logo & foto tampak depan cafe yang dikirim lewat chat tidak bisa diekstrak sebagai file gambar oleh asisten ini. Website sudah disetel untuk otomatis memakai file asli begitu tersedia:
   - Taruh logo asli (PNG transparan disarankan) di `images/logo.png` → otomatis dipakai di header, footer, dan hero (placeholder SVG hilang sendiri).
   - Taruh foto tampak depan cafe di `images/storefront.jpg` → otomatis muncul di kartu "Storefront" pada section Suasana.
   - Menu tidak pakai gambar — sudah dibuat manual (teks) langsung di section Menu, jadi tidak perlu file apa pun untuk itu.
   - Lihat `images/PUT_IMAGES_HERE.txt` untuk detail nama file & ukuran yang disarankan.

6. **Google Maps**
   Peta di section Lokasi sudah otomatis mencari "OZEIS CAFE" di Google Maps. Kalau hasil pencarian kurang akurat, ganti `src` iframe dengan link embed dari Google Maps langsung (Share → Embed a map) setelah kamu drop pin di lokasi pastinya.

## Fitur yang sudah jadi
- Hero, About (Coffee / Eatery / Co.Work), Menu lengkap 7 kategori (Coffee, Non Coffee, Americano Series, Tea, Fresh Drink, Main Course, Snacks) sesuai foto menu, dengan harga Hot/Ice terpisah dan badge ★ untuk item favorit.
- Search menu real-time + tab kategori.
- Strip "Favorit Pelanggan" otomatis dari item berbintang di semua kategori.
- Section Suasana/Gallery, Lokasi + Google Maps embed, CTA order, Footer dengan form newsletter (front-end saja, belum terhubung ke backend/email service — perlu diintegrasikan sendiri kalau mau aktif, misalnya via Mailchimp/Formspree).
- Tombol floating WhatsApp & back-to-top, animasi scroll reveal, responsive penuh (mobile/tablet/desktop), dark theme sesuai warna brand.

## Catatan teknis
- Font: Google Fonts (Anton + Poppins) via CDN — butuh koneksi internet saat load. Kalau perlu offline-first, download font dan host sendiri di folder `fonts/`.
- Tidak ada dependency/build tool — murni HTML/CSS/JS, jadi aman untuk hosting statis apa pun.
