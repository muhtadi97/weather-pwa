import './globals.css';
import Head from 'next/head';
import styles from './layout.module.css';

export const metadata = {
  title: 'Weather PWA Indonesia',
  description: 'Aplikasi prakiraan cuaca Indonesia dengan kemampuan offline',
  keywords: 'cuaca, prakiraan cuaca, indonesia, pwa, offline',
  authors: [{ name: 'Weather PWA Team' }],
  manifest: '/manifest.json',
};

// ✅ EKSPOR VIEWPORT TERPISAH
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="application-name" content="Weather PWA" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* ✅ SERVICE WORKER SCRIPT DIPINDAHKAN KE HEAD */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registration successful');
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                });
              }
            `
          }}
        />
      </head>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
              </svg>
              <h1>WeatherID</h1>
            </div>
            <div className={styles.offlineStatus} id="offlineStatus"></div>
          </header>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Weather PWA Indonesia. Data cuaca dari OpenWeatherMap.</p>
            <p className={styles.installPrompt} id="installPrompt">
              Instal aplikasi ini untuk pengalaman yang lebih baik!
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}