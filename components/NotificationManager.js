import { useState, useEffect } from 'react';
import styles from './NotificationManager.module.css';

export default function NotificationManager({ currentWeather, cityName }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [permission, setPermission] = useState('default');
  const [temperatureThreshold, setTemperatureThreshold] = useState(30);
  const [rainNotifications, setRainNotifications] = useState(true);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('Browser ini tidak mendukung notifikasi');
      return;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        setNotificationsEnabled(true);
        showWelcomeNotification();
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const showWelcomeNotification = () => {
    if (currentWeather && Notification.permission === 'granted') {
      const temp = Math.round(currentWeather.main.temp);
      const description = currentWeather.weather[0].description;
      
      new Notification('Weather PWA Aktif! 🌤️', {
        body: `Cuaca di ${cityName}: ${temp}°C, ${description}`,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        tag: 'weather-welcome',
      });
    }
  };

  const handleToggleNotifications = () => {
    if (permission === 'granted') {
      setNotificationsEnabled(!notificationsEnabled);
    } else {
      requestNotificationPermission();
    }
  };

  const sendTestNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Test Notifikasi Weather PWA ✅', {
        body: 'Notifikasi berhasil diaktifkan! Anda akan menerima pembaruan cuaca.',
        icon: '/icons/icon-192x192.png',
      });
    }
  };

  return (
    <div className={styles.notificationManager}>
      <h3 className={styles.title}>Pengaturan Notifikasi</h3>
      
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
            Minta Izin Notifikasi
          </button>
        )}
      </div>

      {permission === 'granted' && (
        <div className={styles.settingsSection}>
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

          <div className={styles.settingItem}>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={rainNotifications}
                onChange={(e) => setRainNotifications(e.target.checked)}
                disabled={!notificationsEnabled}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={styles.settingLabel}>
              Notifikasi Hujan
            </span>
          </div>

          <div className={styles.settingItem}>
            <label className={styles.thresholdLabel}>
              Notifikasi jika suhu di atas:
            </label>
            <div className={styles.thresholdControl}>
              <input 
                type="range" 
                min="25" 
                max="40" 
                value={temperatureThreshold}
                onChange={(e) => setTemperatureThreshold(parseInt(e.target.value))}
                disabled={!notificationsEnabled}
                className={styles.thresholdSlider}
              />
              <span className={styles.thresholdValue}>{temperatureThreshold}°C</span>
            </div>
          </div>

          <button 
            className={styles.testButton}
            onClick={sendTestNotification}
            disabled={!notificationsEnabled}
          >
            Kirim Notifikasi Test
          </button>
        </div>
      )}

      {permission === 'denied' && (
        <div className={styles.deniedMessage}>
          <p>Izin notifikasi ditolak. Untuk mengaktifkan, buka pengaturan browser Anda.</p>
        </div>
      )}
    </div>
  );
}