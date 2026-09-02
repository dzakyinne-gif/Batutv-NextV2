# Architecture Decisions Log (DECISIONS.md)

### D-001: Tetap Menggunakan Firebase Firestore
- **Keputusan**: Tetap menggunakan Cloud Firestore (project `batutv-next`), tidak migrasi ke SQL / relational database.
- **Alasan**: Data live production sudah aktif terisi, skema dokumen fleksibel untuk konten multimedia portal berita.
- **Alternatif dipertimbangkan**: PostgreSQL / Cloud SQL.
- **Konsekuensi**: Mengoptimalkan indeks Firestore dan menjaga aturan keamanan rules.

### D-002: Firebase Admin SDK Server-Only
- **Keputusan**: Firebase Admin SDK hanya diinisialisasi dan diakses di sisi server (Server Components, Server Actions, Route Handlers, Middleware).
- **Alasan**: Menjaga credential service account agar tidak bocor ke client bundle.
- **Alternatif dipertimbangkan**: Direct client-side updates dengan credential admin.
- **Konsekuensi**: Client menggunakan Client SDK untuk listener real-time dan Server Actions untuk mutasi aman.

### D-003: Pertahankan Repository Pattern (`I<Domain>Repository`)
- **Keputusan**: Pola interface repository tetap dipertahankan dan di-port ke `src/features/<domain>/data/`.
- **Alasan**: Memisahkan layer data access dari framework routing Next.js dan mempermudah unit testing.
- **Alternatif dipertimbangkan**: Query Firestore langsung di dalam file page.
- **Konsekuensi**: Kode terstruktur rapi, decoupled, dan mudah diuji dengan mock.

### D-004: Larangan Menghapus `App.tsx` & `server.ts` Sebelum Tuntas
- **Keputusan**: File legacy `App.tsx` dan `server.ts` dipertahankan hingga seluruh domain selesai dimigrasi dan diverifikasi.
- **Alasan**: Menghindari regresi logika bisnis dan memastikan fallback fungsional tetap ada.
- **Konsekuensi**: Menjaga stabilitas aplikasi selama masa transisi.

### D-005: Migrasi SSR/SEO String-Replace ke Native Next.js Metadata
- **Keputusan**: Mengganti logic SSR string-replace di `server.ts` dengan `generateMetadata()`, `app/sitemap.ts`, dan `app/robots.ts`.
- **Alasan**: Standar native Next.js 16, performa lebih tinggi, dan type-safe.
- **Konsekuensi**: Query Firestore by slug diadaptasi ke server function.

### D-006: Auth Migration ke httpOnly Session Cookie
- **Keputusan**: Mengganti auth state di `localStorage` menjadi session cookie yang diverifikasi di `middleware.ts`.
- **Alasan**: Melindungi rute `/batutv-control/*` di level edge/server sebelum komponen dirender.
- **Konsekuensi**: Alur login menjadi 2 tahap: login di client via Firebase SDK -> exchange token ke route handler server untuk set cookie.

### D-007: Strategi Vertical Slice Per Domain
- **Keputusan**: Migrasi dikerjakan domain demi domain secara vertikal (Articles -> Auth -> Videos -> Taxonomy -> Pages/Settings).
- **Alasan**: Mengurangi risiko kegagalan dan memastikan setiap modul teruji penuh sebelum melangkah ke modul berikutnya.
- **Konsekuensi**: Setiap domain memiliki schema, repository, action, UI, dan tesnya sendiri.

### D-008: Folder `src/app/` Lama Ditulis Ulang
- **Keputusan**: Merestrukturisasi isi `src/app/` sesuai standar Next.js 16 App Router.
- **Alasan**: File app lama adalah stub awal dari eksperimen.
- **Konsekuensi**: Route groups `(portal)`, `(auth)`, `(dashboard)`, `api/` dibangun dengan arsitektur bersih.

### D-009: Observability & 23 Script Audit Dipertahankan Apa Adanya
- **Keputusan**: Folder `src/observability/` dan 23 script `audit:*` dipindahkan tanpa mengubah logic intinya.
- **Alasan**: Script audit operasional, SLO, dan DR runbook sudah teruji dan esensial untuk tata kelola sistem.
- **Konsekuensi**: Penyesuaian path import dilakukan tanpa mengubah algoritma audit.
