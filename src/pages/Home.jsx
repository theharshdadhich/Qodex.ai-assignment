import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <ErrorMessage />
      <WeatherCard />
    </div>
  );
};

export default Home;
