import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather
export const fetchWeather = async (city, units = 'metric') => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Fetch 5-day weather forecast
export const fetchForecast = async (city, units = 'metric') => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${units}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error.response?.data?.message || error.message);
    throw error;
  }
};
