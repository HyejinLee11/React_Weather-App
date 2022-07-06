import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid white;
  padding: 50px;
  border-radius: 30px;
  background-color: bisque;
  margin-bottom: 10px;
`;

const WeatherBox = ({weather}) => {
  console.log("weather?" , weather);

  return (
    <Container>
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}°C</h2>
      <h3>{weather?.weather[0].description}</h3>
    </Container>
  )
}

export default WeatherBox;