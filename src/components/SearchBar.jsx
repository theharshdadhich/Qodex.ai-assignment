import { useState, useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/WeatherContext';

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 200px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { setCity } = useContext(WeatherContext);

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
      setInput('');
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
