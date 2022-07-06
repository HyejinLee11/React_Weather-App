import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, handleCityChange, selectedCity }) => {
  console.log("cities?", cities);

  return (
    <div>
      <Button variant={`${selectedCity === "" ? "primary" : "warning"}`} onClick={() => handleCityChange("current")}>Current Location</Button>{' '}
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity === item ? "primary" : "warning"}`}
          key={index}
          onClick={() => {
            setCity(item)
          }
          }
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton;