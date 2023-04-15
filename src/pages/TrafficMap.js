// TrafficMap.js
import React from "react";
import { GoogleMap, LoadScript, TrafficLayer } from "@react-google-maps/api";
import "./TrafficMap.module.css";
import Alert from 'react-bootstrap/Alert';

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.8136,
  lng: 144.9631,
};

const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";

const TrafficMap = () => {
  return (
    <div className="traffic-map-container">
        <Alert variant="primary">
        This function is used to check the current real-time updates of Australian traffic. Here you can get detailed information about traffic congestion, and you can choose which means of transportation to take more conveniently through traffic conditions, thereby reducing carbon emissions.
        </Alert>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          <TrafficLayer autoRefresh />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default TrafficMap;
