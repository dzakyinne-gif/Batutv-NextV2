import React from 'react';
import '@/src/styles/globals.css';

export const metadata = {
  title: 'BatuTV | Portal Berita Terkini, Daerah Batu, Nasional & Video',
  description: 'Portal Berita Terkini, Akurat, dan Terpercaya Seputar Kota Batu, Malang Raya, Jawa Timur, Nasional, Ekonomi, Politik, dan Siaran TV Streaming - BatuTV.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Poppins:wght@400;500;600;700;800;900&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%23ff2a3b'/><stop offset='100%25' stop-color='%23800007'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='url(%23g)'/><path d='M25 20 C45 20, 75 35, 75 50 C75 65, 45 80, 25 80 Z' fill='%23500004' opacity='0.7'/><path d='M35 32 L58 48 L35 58 Z' fill='white'/><path d='M35 58 L58 68 L35 78 Z' fill='white'/></svg>"
        />
      </head>
      <body className="min-h-screen bg-[#FDFCFB] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
