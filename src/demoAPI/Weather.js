import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";
  const [error, setError] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const fetchWeatherData = useCallback(async (latitude, longitude) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=88e2ff032ca8b683249ce94aef6dd767`;
    try {
      const response = await axios.get(weatherUrl);
      setData(response.data);
      setError(false);
    } catch (error) {
      setError(true);
      setData({});
    }
  }, []);

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`;
      try {
        const response = await axios.get(geocodeUrl);
        const { lat, lng } = response.data.results[0].geometry.location;
        fetchWeatherData(lat, lng);
        if (userLocation) {
          const dist = calculateDistance(userLocation.lat, userLocation.lng, lat, lng);
          setDistance(dist.toFixed(2));
        }
      } catch (error) {
        setError(true);
        setData({});
      }
      setLocation("");
    }
  };

  

  
  const getTravelRecommendation = () => {
    if (!data.weather) return null;

    const weather = data.weather[0].main;
    const temp = data.main.temp;

    if (weather === 'Rain' || weather === 'Drizzle') {
      return 'It is currently raining, consider taking a car or public transportation instead of walking.'
    } else if (weather === 'Snow') {
      return 'It is currently snowing, consider taking a car or public transportation instead of walking.'
    } else if (temp > 85) {
      return 'It is currently very hot outside, consider taking a car or public transportation instead of walking.'
    } else if (temp < 40) {
      return 'It is currently very cold outside, consider taking a car or public transportation instead of walking.'
    } else {
      return 'The weather is nice, feel free to walk or bike to your destination!'
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h2>Invalid location. Please try again with a valid location.</h2>
        </div>
      ) : (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>

            <div className="description">
              {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
            </div>

            {data.name != undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}

                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}

            <div className="travel-recommendation">{getTravelRecommendation()}</div>
            {distance && (
              <div className="distance">
                <p>The destination is {distance} km away from you.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default Weather;
