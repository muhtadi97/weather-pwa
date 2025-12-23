import { WEATHER_CONDITIONS } from '@/utils/constants';
import styles from './ForecastList.module.css';

export default function ForecastList({ forecast, temperatureUnit, convertTemperature }) {
  if (!forecast || forecast.length === 0) return null;

  const groupByDay = (forecastList) => {
    const grouped = {};
    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString('id-ID', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    
    return Object.entries(grouped).slice(0, 5); // Ambil 5 hari pertama
  };

  const getDaySummary = (dayForecast) => {
    const temps = dayForecast.map(f => f.main.temp);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);
    const mainWeather = dayForecast[Math.floor(dayForecast.length / 2)].weather[0];
    
    return {
      minTemp,
      maxTemp,
      icon: mainWeather.icon,
      description: WEATHER_CONDITIONS[mainWeather.icon] || mainWeather.description,
    };
  };

  const dailyForecasts = groupByDay(forecast);

  return (
    <div className={styles.forecastList}>
      {dailyForecasts.map(([date, dayForecast], index) => {
        const summary = getDaySummary(dayForecast);
        
        return (
          <div key={index} className={`${styles.forecastItem} fade-in`}>
            <div className={styles.forecastDate}>
              <span className={styles.weekday}>{date.split(',')[0]}</span>
              <span className={styles.date}>{date.split(',')[1]}</span>
            </div>
            
            <div className={styles.forecastIcon}>
              <img 
                src={`https://openweathermap.org/img/wn/${summary.icon}.png`}
                alt={summary.description}
                loading="lazy"
              />
              <span className={styles.weatherText}>{summary.description}</span>
            </div>
            
            <div className={styles.forecastTemps}>
              <div className={styles.tempRange}>
                <span className={styles.tempMax}>
                  {convertTemperature(summary.maxTemp)}°{temperatureUnit === 'celsius' ? 'C' : 'F'}
                </span>
                <span className={styles.tempSeparator}>/</span>
                <span className={styles.tempMin}>
                  {convertTemperature(summary.minTemp)}°{temperatureUnit === 'celsius' ? 'C' : 'F'}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}