import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';

const ForecastContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ForecastGrid = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const ForecastItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 100px;
`;

const ForecastCard = () => {
  const { forecast } = useContext(WeatherContext);

  if (!forecast) return <p>Loading 5-day forecast...</p>;

  return (
    <ForecastContainer>
      <h3>5-Day Forecast</h3>
      <ForecastGrid>
        {forecast.list.filter((item, index) => index % 8 === 0).map((day, i) => (
          <ForecastItem key={i}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>🌡 {day.main.temp}°C</p>
            <p>💨 {day.wind.speed} m/s</p>
          </ForecastItem>
        ))}
      </ForecastGrid>
    </ForecastContainer>
  );
};

export default ForecastCard;
