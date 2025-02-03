import { WeatherProvider } from './context/WeatherContext';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <Home />
    </WeatherProvider>
  );
};

export default App;
