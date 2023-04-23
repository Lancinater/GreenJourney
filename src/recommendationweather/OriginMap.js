import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import { LocationContext } from "../LocationContext";

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -37.8136,
  lng: 144.9631,
};

const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";

const OriginMap = () => {
  const { destinationLocation } = useContext(LocationContext);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

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

  const directionsCallback = (response, status) => {
    if (status === "OK") {
      setDirections(response);
      setError(null);
    } else {
      setError("Failed to get directions.");
    }
  };

  return (
    <div className="origin-map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={userLocation || center} zoom={13}>
          {userLocation && destinationLocation && (
            <DirectionsService
              options={{
                destination: destinationLocation,
                origin: userLocation,
                travelMode: "DRIVING",
              }}
              callback={directionsCallback}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default OriginMap;
