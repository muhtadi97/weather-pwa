import { useState } from 'react';
import styles from './LocationSelector.module.css';

export default function LocationSelector({ cities, selectedCity, onCityChange, loading }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (city) => {
    onCityChange(city);
    setIsOpen(false);
  };

  return (
    <div className={styles.locationSelector}>
      <button 
        className={styles.selectorButton}
        onClick={() => setIsOpen(!isOpen)}
        disabled={loading}
      >
        <span className={styles.buttonContent}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.selectedCity}>{selectedCity.name}</span>
          <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
        </span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {cities.map(city => (
            <button
              key={city.id}
              className={`${styles.dropdownItem} ${selectedCity.id === city.id ? styles.active : ''}`}
              onClick={() => handleSelect(city)}
            >
              <span className={styles.cityName}>{city.name}</span>
              <span className={styles.cityCoordinates}>
                {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}