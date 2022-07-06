import { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

const API_KEY = process.env.REACT_APP_API_KEY

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

function App() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    console.log("getCuuretLocation");

    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon)
      getWeatherByCurrentLocatioin(lat, lon)
    });
  }

  const getWeatherByCurrentLocatioin = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` /* 11 */
    let response = await fetch(url) 
    let data = await response.json();
    console.log("data", data);
    setWeather(data)
  };

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <Container>
      <WeatherBox weather={weather}/>
      <WeatherButton />
    </Container>
  );
}

export default App;
