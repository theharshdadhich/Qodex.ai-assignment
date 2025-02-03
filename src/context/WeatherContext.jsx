import { createContext, useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '../utils/api';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('lastCity') || 'New York');
  const [units, setUnits] = useState('metric'); // Default to Celsius

  useEffect(() => {
    if (city) {
      getWeather(city, units);
      getForecast(city, units);
    }
    const interval = setInterval(() => {
      getWeather(city, units);
      getForecast(city, units);
    }, 30000);
    return () => clearInterval(interval);
  }, [city, units]);

  const getWeather = async (city, units) => {
    try {
      setError(null);
      const data = await fetchWeather(city, units);
      setWeather(data);
      localStorage.setItem('lastCity', city);
    } catch (err) {
      setError('City not found. Try again!');
    }
  };

  const getForecast = async (city, units) => {
    try {
      const data = await fetchForecast(city, units);
      setForecast(data);
    } catch (err) {
      console.error('Error fetching forecast:', err);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, forecast, error, setCity, units, setUnits }}>
      {children}
    </WeatherContext.Provider>
  );
};
