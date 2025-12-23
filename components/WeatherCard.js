import { WEATHER_CONDITIONS } from '@/utils/constants';
import styles from './WeatherCard.module.css';

export default function WeatherCard({ weather, cityName, temperatureUnit, convertTemperature }) {
  if (!weather) return null;

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`${styles.weatherCard} fade-in`}>
      <div className={styles.weatherHeader}>
        <div>
          <h2 className={styles.cityName}>{cityName}</h2>
          <p className={styles.date}>{formatDate(weather.dt)}</p>
        </div>
        <div className={styles.temperatureContainer}>
          <div className={styles.currentTemp}>
            {convertTemperature(weather.main.temp)}°
            <span className={styles.tempUnit}>{temperatureUnit === 'celsius' ? 'C' : 'F'}</span>
          </div>
          <p className={styles.feelsLike}>
            Terasa seperti {convertTemperature(weather.main.feels_like)}°{temperatureUnit === 'celsius' ? 'C' : 'F'}
          </p>
        </div>
      </div>

      <div className={styles.weatherBody}>
        <div className={styles.weatherIcon}>
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
            loading="lazy"
          />
          <p className={styles.weatherDescription}>
            {WEATHER_CONDITIONS[weather.weather[0].icon] || weather.weather[0].description}
          </p>
        </div>

        <div className={styles.weatherDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Kelembaban</span>
            <span className={styles.detailValue}>{weather.main.humidity}%</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Angin</span>
            <span className={styles.detailValue}>{weather.wind.speed} m/s</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Tekanan</span>
            <span className={styles.detailValue}>{weather.main.pressure} hPa</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Visibilitas</span>
            <span className={styles.detailValue}>{(weather.visibility / 1000).toFixed(1)} km</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Suhu Min</span>
            <span className={styles.detailValue}>{convertTemperature(weather.main.temp_min)}°</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Suhu Max</span>
            <span className={styles.detailValue}>{convertTemperature(weather.main.temp_max)}°</span>
          </div>
        </div>
      </div>

      <div className={styles.sunTimes}>
        <div className={styles.sunTime}>
          <span className={styles.sunIcon}>🌅</span>
          <span className={styles.sunLabel}>Terbit</span>
          <span className={styles.sunValue}>
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
        <div className={styles.sunTime}>
          <span className={styles.sunIcon}>🌇</span>
          <span className={styles.sunLabel}>Terbenam</span>
          <span className={styles.sunValue}>
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>
    </div>
  );
}