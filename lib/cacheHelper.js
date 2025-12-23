// Cache management utilities
export const cacheWeatherData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(`${key}-timestamp`, Date.now().toString());
    return true;
  } catch (error) {
    console.error('Error caching data:', error);
    return false;
  }
};

export const getCachedWeatherData = (key, maxAge = 30 * 60 * 1000) => {
  try {
    const cachedData = localStorage.getItem(key);
    const timestamp = localStorage.getItem(`${key}-timestamp`);
    
    if (!cachedData || !timestamp) {
      return null;
    }
    
    const age = Date.now() - parseInt(timestamp, 10);
    
    if (age > maxAge) {
      // Data is too old
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}-timestamp`);
      return null;
    }
    
    return JSON.parse(cachedData);
  } catch (error) {
    console.error('Error retrieving cached data:', error);
    return null;
  }
};

export const clearOldCache = () => {
  const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    if (key.endsWith('-timestamp')) {
      const timestamp = parseInt(localStorage.getItem(key), 10);
      
      if (timestamp && timestamp < oneWeekAgo) {
        const dataKey = key.replace('-timestamp', '');
        localStorage.removeItem(dataKey);
        localStorage.removeItem(key);
      }
    }
  }
};

export const estimateCacheSize = () => {
  let total = 0;
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    total += key.length + value.length;
  }
  
  return (total * 2) / 1024; // Size in KB
};