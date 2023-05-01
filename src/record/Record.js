import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  TrafficLayer,
  Marker,
  DistanceMatrixService,
} from "@react-google-maps/api";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";

const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";

const Record = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [transportation, setTransportation] = useState("car");
  const [dayOfWeek, setDayOfWeek] = useState("Monday");
  const [carbonEmission, setCarbonEmission] = useState("");
  const [results, setResults] = useState({
    Monday: { distance: 0, carbonFootprint: 0 },
    Tuesday: { distance: 0, carbonFootprint: 0 },
    Wednesday: { distance: 0, carbonFootprint: 0 },
    Thursday: { distance: 0, carbonFootprint: 0 },
    Friday: { distance: 0, carbonFootprint: 0 },
  });
  const [showResults, setShowResults] = useState(false);

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  const handleDayOfWeekChange = (event) => {
    setDayOfWeek(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const calculateDistance = () => {
    const distanceMatrix = new window.google.maps.DistanceMatrixService();
    distanceMatrix.getDistanceMatrix(
      {
        origins: [userLocation],
        destinations: [destination],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const destinationAddress = response.destinationAddresses[0];
          if (!destinationAddress) {
            console.error("Invalid destination. Please try again.");
          } else {
            const elementStatus = response.rows[0].elements[0].status;
            if (elementStatus === "NOT_FOUND" || elementStatus === "ZERO_RESULTS") {
              console.error("Invalid destination. Please try again.");
            } else {
              const distanceResult = response.rows[0].elements[0].distance.value / 1000;
              setDistance(distanceResult);
              calculateCarbonEmission(distanceResult);
            }
          }
        } else {
          console.error("Error:", status);
        }
      }
    );
  };

  const calculateCarbonEmission = (distance) => {
    let emissionFactor = 0;
    switch (transportation) {
      case "car":
        emissionFactor = 10;
        break;
      case "bus":
        emissionFactor = 20;
        break;
      case "plane":
        emissionFactor = 100;
        break;
      default:
        break;
    }
    const carbonEmissionResult = emissionFactor * distance;
    setCarbonEmission(carbonEmissionResult);
    setShowResults(true);
    setResults((prevResults) => ({
      ...prevResults,
      [dayOfWeek]: {
        distance: prevResults[dayOfWeek].distance + distance,
        carbonFootprint: prevResults[dayOfWeek].carbonFootprint + carbonEmissionResult,
      },
    }));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(pos);
      });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateDistance();
  };

  const onLoad = React.useCallback(function onLoad() {
    // Your code to initialize Google Maps goes here
  }, [])

  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey} onLoad={onLoad}>
      <h1>Carbon Footprint Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Transportation:
          <select value={transportation} onChange={handleTransportationChange}>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="flight">Flight</option>
          </select>
        </label>
        <br />
        <label>
          Day of Week:
          <select value={dayOfWeek} onChange={handleDayOfWeekChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </label>
        <br />
        <label>
          Destination:
          <input type="text" value={destination} onChange={handleDestinationChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {showResults && (
      <table style={{ margin: "20px auto", borderCollapse: "collapse", textAlign: "center" }}>
      <thead>
        <tr>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Day of Week</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Distance (km)</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Carbon Footprint (g)</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(results).map(([day, { distance, carbonFootprint }]) => (
          <tr key={day}>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{day}</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{distance}</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{carbonFootprint}</td>
          </tr>
        ))}
      </tbody>
    </table>
)}
      </LoadScript>
    </div>
  );
}

export default Record;  