// components/InstallButton.js - VERSION FIXED
'use client';

import { useState, useEffect } from 'react';
import styles from './InstallButton.module.css';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Cek jika sudah diinstall
    const checkStandalone = () => {
      const isStandalone = 
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone ||
        document.referrer.includes('android-app://');
      
      setIsStandalone(isStandalone);
      
      if (isStandalone) {
        console.log('✅ PWA already installed');
        return true;
      }
      return false;
    };

    if (checkStandalone()) return;

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIos);

    // Listen for install prompt - FIX: Simpan event
    const handleBeforeInstallPrompt = (e) => {
      console.log('🎯 beforeinstallprompt event fired!');
      
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      setIsInstallable(true);
      
      // Auto-show prompt after 3 seconds (optional)
      setTimeout(() => {
        if (deferredPrompt) {
          console.log('Auto-showing install prompt...');
          handleInstallClick();
        }
      }, 3000);
    };

    // Check if already installed
    const handleAppInstalled = () => {
      console.log('✅ PWA installed successfully');
      setIsInstallable(false);
      setIsStandalone(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Initial check
    checkStandalone();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log('No deferred prompt available');
      setShowInstructions(true);
      return;
    }

    console.log('🎯 Showing install prompt...');
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    console.log(`User response: ${choiceResult.outcome}`);
    
    if (choiceResult.outcome === 'accepted') {
      console.log('✅ User accepted the install prompt');
    } else {
      console.log('❌ User dismissed the install prompt');
    }
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const handleManualInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  // Jika sudah terinstall
  if (isStandalone) {
    return (
      <div className={styles.installedStatus}>
        <span className={styles.checkIcon}>✅</span>
        Aplikasi sudah terinstall
      </div>
    );
  }

  // Jika iOS, tampilkan instruksi khusus
  if (isIOS) {
    return (
      <div className={styles.iosInstructions}>
        <div className={styles.iosHeader}>
          <span className={styles.iosIcon}>📱</span>
          <h4>Install di iPhone/iPad</h4>
        </div>
        <div className={styles.iosSteps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            Tap <span className={styles.shareIcon}>⎋</span> Share button
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            Scroll → "Add to Home Screen"
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            Tap "Add" → Selesai!
          </div>
        </div>
      </div>
    );
  }

  // Jika bisa install (Android/Desktop Chrome)
  if (isInstallable && deferredPrompt) {
    return (
      <div className={styles.installContainer}>
        <button 
          className={styles.installButton}
          onClick={handleInstallClick}
        >
          <span className={styles.installIcon}>📲</span>
          INSTAL APLIKASI CUACA
        </button>
        <button 
          className={styles.helpButton}
          onClick={handleManualInstructions}
        >
          ℹ️ Cara Install Manual
        </button>
        
        {showInstructions && (
          <div className={styles.manualInstructions}>
            <p><strong>Cara Install Manual:</strong></p>
            <ol>
              <li>Klik tombol "INSTAL APLIKASI CUACA" di atas</li>
              <li>Di popup yang muncul, pilih "Install"</li>
              <li>Tunggu proses install selesai</li>
              <li>Aplikasi akan muncul di desktop/home screen</li>
            </ol>
          </div>
        )}
      </div>
    );
  }

  // Jika belum bisa install (tunggu event)
  return (
    <div className={styles.waitingContainer}>
      <div className={styles.spinner}></div>
      <p>Menyiapkan instalasi aplikasi...</p>
      <button 
        className={styles.retryButton}
        onClick={() => window.location.reload()}
      >
        🔄 Coba Lagi
      </button>
    </div>
  );
}