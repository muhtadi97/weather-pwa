export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const CITIES = [
  { id: 1, name: 'Jakarta', lat: -6.2088, lon: 106.8456 },
  { id: 2, name: 'Surabaya', lat: -7.2575, lon: 112.7521 },
  { id: 3, name: 'Bandung', lat: -6.9175, lon: 107.6191 },
  { id: 4, name: 'Medan', lat: 3.5952, lon: 98.6722 },
  { id: 5, name: 'Makassar', lat: -5.1477, lon: 119.4327 },
  { id: 6, name: 'Semarang', lat: -6.9667, lon: 110.4167 },
  { id: 7, name: 'Palembang', lat: -2.9761, lon: 104.7759 },
  { id: 8, name: 'Denpasar', lat: -8.6705, lon: 115.2126 },
];

export const WEATHER_CONDITIONS = {
  '01d': 'Cerah',
  '01n': 'Cerah Malam',
  '02d': 'Sedikit Berawan',
  '02n': 'Sedikit Berawan Malam',
  '03d': 'Berawan',
  '03n': 'Berawan Malam',
  '04d': 'Mendung',
  '04n': 'Mendung Malam',
  '09d': 'Hujan Ringan',
  '09n': 'Hujan Ringan Malam',
  '10d': 'Hujan',
  '10n': 'Hujan Malam',
  '11d': 'Badai Petir',
  '11n': 'Badai Petir Malam',
  '13d': 'Salju',
  '13n': 'Salju Malam',
  '50d': 'Kabut',
  '50n': 'Kabut Malam',
};

export const CACHE_KEYS = {
  CURRENT_WEATHER: 'current-weather',
  FORECAST: 'weather-forecast',
  LOCATION: 'user-location',
};