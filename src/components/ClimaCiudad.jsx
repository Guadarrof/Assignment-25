import React from "react";
import { useState, useEffect } from "react";

const ClimaCiudad = () => {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [msge, setMsge] = useState("");
  const [url, setUrl] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    obtenerTemperatura();
  }, [city]);

  async function obtenerTemperatura() {
    if (!city) return;
    try {
      const response = await fetch(url);
      const weatherData = await response.json();
      if (weatherData.main && weatherData.main.temp) {
        setTemp(weatherData.main.temp);
        if (weatherData.main.temp > 25) {
          setMsge("Hace mucho calor");
          setStyle("hot");
        } else if (weatherData.main.temp < 15) {
          setMsge("Hace mucho frío");
          setStyle("cold");
        } else {
          setMsge("");
        }
      } else {
        setMsge("Error al obtener la temperatura");
        setTemp("");
        setStyle("");
      }
    } catch (error) {
      console.error("Error al obtener la temperatura:", error);
      setMsge("Error al obtener la temperatura");
    }
  }

  function actualizarCiudad(newCity) {
    setCity(newCity);
    const API_KEY = "d4a14d581669c51e02eea265b812f5c4";
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=${API_KEY}`;
    setUrl(newUrl);
  }

  return (
    <>
      <h1>Buscar Temperatura</h1>
      <input
        className="input"
        type="text"
        placeholder="Ingrese una ciudad"
        value={city}
        onChange={(e) => actualizarCiudad(e.target.value)}
      />
      <div className="clima" id={style}>
        <div className="temp-div">
          {temp && <p className="temp">{temp} C</p>}
        </div>
        <div className="text-div">
          {city && <p className="city">{city}</p>}
          {msge && <p className="message">{msge}</p>}
        </div>
      </div>
    </>
  );
};

export default ClimaCiudad;
