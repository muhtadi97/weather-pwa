import { WEATHER_API_URL, WEATHER_API_KEY } from '@/utils/constants';

export const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=id`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const getForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=id&cnt=40`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch forecast data');
    }
    
    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

export const getWeatherByCityName = async (cityName) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric&lang=id`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather by city name');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather by city:', error);
    throw error;
  }
};