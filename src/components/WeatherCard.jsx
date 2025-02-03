import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 320px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const Temperature = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const Detail = styled.p`
  font-size: 16px;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #e68900;
  }
`;

const WeatherCard = () => {
  const { weather, units, setUnits } = useContext(WeatherContext);

  if (!weather) return <p>Loading...</p>;

  const { main, weather: weatherDetails, wind } = weather;

  // ✅ Convert temperature based on unit
  const temperature = units === 'metric' ? main.temp : (main.temp * 9/5) + 32;

  // ✅ Convert wind speed based on unit
  const windSpeed = units === 'metric' ? wind.speed : wind.speed * 2.237; // 1 m/s = 2.237 mph

  return (
    <Card>
      <h2>{weather.name}, {weather.sys.country}</h2>

      <WeatherIcon 
        src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`} 
        alt={weatherDetails[0].description} 
      />

      <Temperature>🌡 {temperature.toFixed(1)}°{units === 'metric' ? 'C' : 'F'}</Temperature>
      <Detail>💧 Humidity: {main.humidity}%</Detail>
      <Detail>💨 Wind Speed: {windSpeed.toFixed(1)} {units === 'metric' ? 'm/s' : 'mph'}</Detail>
      <Detail>🌤 Condition: {weatherDetails[0].description.toUpperCase()}</Detail>

      <ToggleButton onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}>
        Switch to {units === 'metric' ? 'Fahrenheit & mph' : 'Celsius & m/s'}
      </ToggleButton>
    </Card>
  );
};

export default WeatherCard;
 