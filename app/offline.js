import Link from 'next/link';
import styles from './page.module.css';

export default function OfflinePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.offlineContent}>
        <div className={styles.offlineIcon}>📡</div>
        <h1 className={styles.offlineTitle}>Anda Sedang Offline</h1>
        <p className={styles.offlineMessage}>
          Tidak ada koneksi internet. Anda masih dapat melihat data cuaca yang terakhir dimuat.
        </p>
        <div className={styles.offlineActions}>
          <button 
            className={styles.refreshButton}
            onClick={() => window.location.reload()}
          >
            Coba Koneksi Ulang
          </button>
          <Link href="/">
            <button className={styles.homeButton}>
              Kembali ke Beranda
            </button>
          </Link>
        </div>
        <div className={styles.offlineTips}>
          <h3>Tips saat Offline:</h3>
          <ul>
            <li>Data cuaca terakhir masih tersedia</li>
            <li>Periksa koneksi Wi-Fi atau data seluler</li>
            <li>Aplikasi ini dapat berfungsi sepenuhnya saat online</li>
            <li>Instal aplikasi untuk pengalaman offline yang lebih baik</li>
          </ul>
        </div>
      </div>
    </div>
  );
}