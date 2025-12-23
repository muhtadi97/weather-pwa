// Push notification utilities
export const registerPushNotifications = async () => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.log('Push notifications not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    
    // Check subscription
    let subscription = await registration.pushManager.getSubscription();
    
    if (!subscription) {
      // Subscribe to push notifications
      const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      
      if (!publicKey) {
        console.error('VAPID public key is not defined');
        return null;
      }

      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      });
    }

    return subscription;
  } catch (error) {
    console.error('Error registering push notifications:', error);
    return null;
  }
};

export const unsubscribeFromPushNotifications = async () => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    
    if (subscription) {
      await subscription.unsubscribe();
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error unsubscribing from push notifications:', error);
    return false;
  }
};

export const sendWeatherNotification = (weatherData, cityName) => {
  if (!('Notification' in window) || Notification.permission !== 'granted') {
    return;
  }

  const temp = Math.round(weatherData.main.temp);
  const condition = weatherData.weather[0].description;
  const high = Math.round(weatherData.main.temp_max);
  const low = Math.round(weatherData.main.temp_min);

  const notificationOptions = {
    body: `Sekarang: ${temp}°C, ${condition}. Tinggi: ${high}°C, Rendah: ${low}°C`,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    tag: 'weather-update',
    renotify: true,
    vibrate: [200, 100, 200],
    data: {
      city: cityName,
      timestamp: Date.now()
    }
  };

  // Check if notification should be shown based on user preferences
  const shouldNotify = localStorage.getItem('weather-notifications-enabled') === 'true';
  
  if (shouldNotify) {
    new Notification(`Cuaca di ${cityName}`, notificationOptions);
  }
};

// Helper function to convert VAPID key
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray;
};