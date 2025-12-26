'use client';

import { useState, useEffect } from 'react';
import styles from './InstallButton.module.css';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Cek jika sudah diinstall
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);
      return;
    }

    // Detect iOS
    const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    setIsIOS(isIos);

    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
      console.log('✅ PWA install prompt available');
    });

    // Check if already installed
    window.addEventListener('appinstalled', () => {
      console.log('✅ PWA installed successfully');
      setIsInstallable(false);
      setIsStandalone(true);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
      window.removeEventListener('appinstalled', () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  if (isStandalone) {
    return (
      <div className={styles.installedStatus}>
        ✅ Aplikasi sudah terinstall
      </div>
    );
  }

  if (isIOS) {
    return (
      <div className={styles.iosInstructions}>
        <h4>📲 Install di iOS:</h4>
        <ol>
          <li>Tap <span className={styles.shareIcon}>⎋</span> Share button</li>
          <li>Scroll down → "Add to Home Screen"</li>
          <li>Tap "Add"</li>
        </ol>
      </div>
    );
  }

  if (!isInstallable) {
    return (
      <div className={styles.waiting}>
        ⏳ Tunggu beberapa detik untuk install...
      </div>
    );
  }

  return (
    <button 
      className={styles.installButton}
      onClick={handleInstallClick}
    >
      📲 INSTAL APLIKASI
    </button>
  );
}