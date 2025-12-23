'use client';

import { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import ForecastList from '@/components/ForecastList';
import LocationSelector from '@/components/LocationSelector';
import NotificationManager from '@/components/NotificationManager';
import { getCurrentWeather, getForecast } from '@/lib/weatherAPI';
import { CITIES, CACHE_KEYS } from '@/utils/constants';
import styles from './page.module.css';

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Load cached weather data
    const cachedWeather = localStorage.getItem(CACHE_KEYS.CURRENT_WEATHER);
    const cachedForecast = localStorage.getItem(CACHE_KEYS.FORECAST);
    const cachedCity = localStorage.getItem(CACHE_KEYS.LOCATION);
    
    if (cachedCity) {
      try {
        setSelectedCity(JSON.parse(cachedCity));
      } catch (e) {
        console.error('Error parsing cached city:', e);
      }
    }
    
    if (cachedWeather) {
      try {
        setCurrentWeather(JSON.parse(cachedWeather));
      } catch (e) {
        console.error('Error parsing cached weather:', e);
      }
    }
    
    if (cachedForecast) {
      try {
        setForecast(JSON.parse(cachedForecast));
      } catch (e) {
        console.error('Error parsing cached forecast:', e);
      }
    }
    
    fetchWeatherData();
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [selectedCity]);

  const fetchWeatherData = async () => {
    if (!isOnline) {
      console.log('Offline mode - using cached data');
      return;
    }
    
    setLoading(true);
    try {
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(selectedCity.lat, selectedCity.lon),
        getForecast(selectedCity.lat, selectedCity.lon)
      ]);
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      
      // Cache data
      localStorage.setItem(CACHE_KEYS.CURRENT_WEATHER, JSON.stringify(weatherData));
      localStorage.setItem(CACHE_KEYS.FORECAST, JSON.stringify(forecastData));
      localStorage.setItem(CACHE_KEYS.LOCATION, JSON.stringify(selectedCity));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Use cached data if available
      if (!currentWeather) {
        const cached = localStorage.getItem(CACHE_KEYS.CURRENT_WEATHER);
        if (cached) setCurrentWeather(JSON.parse(cached));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const convertTemperature = (temp) => {
    if (temperatureUnit === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.statusBar}>
        <div className={`${styles.networkStatus} ${isOnline ? styles.online : styles.offline}`}>
          {isOnline ? '● Online' : '● Offline'}
        </div>
        <div className={styles.lastUpdate}>
          {currentWeather && `Update: ${new Date(currentWeather.dt * 1000).toLocaleTimeString('id-ID')}`}
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.controlsSection}>
          <LocationSelector 
            cities={CITIES}
            selectedCity={selectedCity}
            onCityChange={handleCityChange}
            loading={loading}
          />
          
          <div className={styles.controlButtons}>
            <button 
              className={styles.refreshButton}
              onClick={fetchWeatherData}
              disabled={loading || !isOnline}
            >
              {loading ? 'Memuat...' : '⟳ Refresh'}
            </button>
            
            <button 
              className={styles.unitToggle}
              onClick={toggleTemperatureUnit}
            >
              °{temperatureUnit === 'celsius' ? 'C' : 'F'}
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
          {loading && !currentWeather ? (
            <div className={styles.loadingContainer}>
              <div className="loading"></div>
              <p>Memuat data cuaca...</p>
            </div>
          ) : currentWeather ? (
            <>
              <WeatherCard 
                weather={currentWeather}
                cityName={selectedCity.name}
                temperatureUnit={temperatureUnit}
                convertTemperature={convertTemperature}
              />
              
              <div className={styles.forecastSection}>
                <h2 className={styles.sectionTitle}>
                  Prakiraan 5 Hari ke Depan
                </h2>
                <ForecastList 
                  forecast={forecast}
                  temperatureUnit={temperatureUnit}
                  convertTemperature={convertTemperature}
                />
              </div>
            </>
          ) : (
            <div className={styles.errorContainer}>
              <h3>Gagal memuat data cuaca</h3>
              <p>Pastikan koneksi internet Anda aktif atau coba lagi nanti.</p>
            </div>
          )}
        </div>

        <div className={styles.notificationSection}>
          <NotificationManager 
            currentWeather={currentWeather}
            cityName={selectedCity.name}
          />
        </div>
      </div>
    </div>
  );
}