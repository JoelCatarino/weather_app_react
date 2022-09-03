import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";

const Forecast = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=61d071fc066604ae8150d325cdb886cb"
    )
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  return (
    <header>
      <h1>Weather App</h1>
      {apiData && <Cards batata={apiData} />}
    </header>
  );
};

export default Forecast;
