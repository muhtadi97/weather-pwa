// components/NotificationManager.js - UPDATE VERSION
'use client';

import { useState, useEffect } from 'react';
import styles from './NotificationManager.module.css';

export default function NotificationManager({ currentWeather, cityName }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [permission, setPermission] = useState('default');
  const [temperatureThreshold, setTemperatureThreshold] = useState(30);
  const [rainNotifications, setRainNotifications] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
    
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('notificationSettings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        setNotificationsEnabled(settings.enabled || false);
        setTemperatureThreshold(settings.threshold || 30);
        setRainNotifications(settings.rain || true);
      } catch (e) {
        console.error('Error loading notification settings:', e);
      }
    }
  }, []);

  // ✅ FIX: Check temperature threshold when weather updates
  useEffect(() => {
    if (currentWeather && notificationsEnabled && permission === 'granted') {
      checkTemperatureAlert();
    }
  }, [currentWeather, temperatureThreshold, notificationsEnabled]);

  // ✅ FIX: Function to check temperature against threshold
  const checkTemperatureAlert = () => {
    if (!currentWeather) return;
    
    const currentTemp = Math.round(currentWeather.main.temp);
    
    if (currentTemp >= temperatureThreshold) {
      const message = `🔥 Suhu tinggi! ${cityName}: ${currentTemp}°C (melebihi ${temperatureThreshold}°C)`;
      setAlertMessage(message);
      setShowAlert(true);
      
      // Show browser notification
      if (Notification.permission === 'granted' && notificationsEnabled) {
        new Notification('🌡️ Peringatan Suhu Tinggi', {
          body: message,
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          tag: 'temperature-alert',
          requireInteraction: true
        });
      }
      
      // Auto hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  // ✅ FIX: Check for rain alerts
  const checkRainAlert = () => {
    if (!currentWeather || !rainNotifications) return;
    
    const weatherCondition = currentWeather.weather[0].main.toLowerCase();
    const isRaining = ['rain', 'drizzle', 'thunderstorm'].includes(weatherCondition);
    
    if (isRaining) {
      const message = `🌧️ Hujan di ${cityName}: ${currentWeather.weather[0].description}`;
      
      if (Notification.permission === 'granted' && notificationsEnabled) {
        new Notification('Peringatan Hujan', {
          body: message,
          icon: '/icons/icon-192x192.png',
          tag: 'rain-alert'
        });
      }
    }
  };

  // ✅ FIX: Save settings to localStorage
  const saveSettings = () => {
    const settings = {
      enabled: notificationsEnabled,
      threshold: temperatureThreshold,
      rain: rainNotifications
    };
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
  };

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      setAlertMessage('Browser ini tidak mendukung notifikasi');
      setShowAlert(true);
      return;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        setNotificationsEnabled(true);
        saveSettings();
        showWelcomeNotification();
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      setAlertMessage('Gagal meminta izin notifikasi');
      setShowAlert(true);
    }
  };

  const showWelcomeNotification = () => {
    if (currentWeather && Notification.permission === 'granted') {
      const temp = Math.round(currentWeather.main.temp);
      const description = currentWeather.weather[0].description;
      
      new Notification('✅ Weather PWA Aktif!', {
        body: `Notifikasi diaktifkan untuk ${cityName}. Suhu saat ini: ${temp}°C`,
        icon: '/icons/icon-192x192.png',
        tag: 'welcome-notification'
      });
    }
  };

  const handleToggleNotifications = () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState);
    
    if (newState && permission !== 'granted') {
      requestNotificationPermission();
    } else if (newState) {
      saveSettings();
      showWelcomeNotification();
    } else {
      saveSettings();
    }
  };

  const handleThresholdChange = (value) => {
    setTemperatureThreshold(value);
    saveSettings();
    
    // Show confirmation
    setAlertMessage(`Threshold suhu diatur ke ${value}°C`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const sendTestNotification = () => {
    if (Notification.permission !== 'granted') {
      setAlertMessage('Izin notifikasi belum diberikan');
      setShowAlert(true);
      return;
    }

    if (!notificationsEnabled) {
      setAlertMessage('Aktifkan notifikasi terlebih dahulu');
      setShowAlert(true);
      return;
    }

    new Notification('🔔 Test Notifikasi', {
      body: 'Notifikasi Weather PWA berfungsi dengan baik!',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: 'test-notification',
      requireInteraction: true
    });
    
    setAlertMessage('✅ Notifikasi test terkirim!');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  // ✅ FIX: Manual trigger for testing
  const triggerManualAlert = () => {
    if (!currentWeather) return;
    
    checkTemperatureAlert();
    checkRainAlert();
  };

  return (
    <div className={styles.notificationManager}>
      <h3 className={styles.title}>🔔 Pengaturan Notifikasi</h3>
      
      {/* Alert Message */}
      {showAlert && (
        <div className={styles.alertMessage}>
          {alertMessage}
          <button 
            className={styles.closeAlert}
            onClick={() => setShowAlert(false)}
          >
            ×
          </button>
        </div>
      )}
      
      <div className={styles.permissionSection}>
        <div className={styles.permissionStatus}>
          <span className={styles.statusLabel}>Status Izin:</span>
          <span className={`${styles.statusValue} ${styles[permission]}`}>
            {permission === 'granted' ? 'Diberikan' : 
             permission === 'denied' ? 'Ditolak' : 'Belum Diputuskan'}
          </span>
        </div>
        
        {permission !== 'granted' && (
          <button 
            className={styles.permissionButton}
            onClick={requestNotificationPermission}
          >
            🚀 Minta Izin Notifikasi
          </button>
        )}
      </div>

      {permission === 'granted' && (
        <div className={styles.settingsSection}>
          {/* Enable Notifications Toggle */}
          <div className={styles.settingItem}>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={notificationsEnabled}
                onChange={handleToggleNotifications}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={styles.settingLabel}>
              Aktifkan Notifikasi Cuaca
            </span>
          </div>

          {/* Rain Notifications */}
          <div className={styles.settingItem}>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={rainNotifications && notificationsEnabled}
                onChange={(e) => {
                  setRainNotifications(e.target.checked);
                  saveSettings();
                }}
                disabled={!notificationsEnabled}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={styles.settingLabel}>
              Notifikasi Hujan
            </span>
          </div>

          {/* Temperature Threshold */}
          <div className={styles.thresholdSection}>
            <label className={styles.thresholdLabel}>
              🌡️ Notifikasi jika suhu ≥
            </label>
            <div className={styles.thresholdControl}>
              <input 
                type="range" 
                min="25" 
                max="40" 
                step="1"
                value={temperatureThreshold}
                onChange={(e) => handleThresholdChange(parseInt(e.target.value))}
                disabled={!notificationsEnabled}
                className={styles.thresholdSlider}
              />
              <span className={styles.thresholdValue}>
                {temperatureThreshold}°C
              </span>
            </div>
            <div className={styles.thresholdInfo}>
              {currentWeather && (
                <span className={styles.currentTempInfo}>
                  Suhu saat ini: {Math.round(currentWeather.main.temp)}°C
                  {Math.round(currentWeather.main.temp) >= temperatureThreshold && (
                    <span className={styles.highTempWarning}> ⚠️ Akan notifikasi!</span>
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Test Button */}
          <button 
            className={styles.testButton}
            onClick={sendTestNotification}
            disabled={!notificationsEnabled}
          >
            🚀 Kirim Notifikasi Test
          </button>

          {/* Manual Trigger Button (for testing) */}
          <button 
            className={styles.manualTriggerButton}
            onClick={triggerManualAlert}
            disabled={!notificationsEnabled || !currentWeather}
          >
            ⚡ Test Alert Sekarang
          </button>
        </div>
      )}

      {permission === 'denied' && (
        <div className={styles.deniedMessage}>
          <p>
            ❌ Izin notifikasi ditolak. Untuk mengaktifkan:<br />
            1. Buka pengaturan browser<br />
            2. Cari "Notifications"<br />
            3. Izinkan notifikasi untuk website ini
          </p>
        </div>
      )}
    </div>
  );
}