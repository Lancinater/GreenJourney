import React, { useState } from "react";
import axios from "axios";
import styles from "./MelbourneEmissions.module.css";

const MelbourneEmissions = () => {
  const [emissions, setEmissions] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEmissionsData = async () => {
    setLoading(true);
    const apiKey = "GSvyMCq6juynSiuXM7sOXA";
    const url = "https://www.carboninterface.com/api/v1/estimates";
    const data = {
      type: "electricity",
      electricity_unit: "kwh",
      electricity_value: 1000,
      country: "AU",
      state: "VIC",
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    };
  
    try {
      const response = await axios.post(url, data, config);
      setEmissions(response.data);
      setLoading(false);
    } catch (error) {
      
      setLoading(false);
    }
  };
  

  return (
    <div className={styles.container}>
      <h1>Melbourne Emissions</h1>
      <button onClick={fetchEmissionsData}>Fetch Emissions Data</button>
      {loading && <p>Loading...</p>}
      {emissions && (
        <div>
          <p>
            Carbon Emissions:{" "}
            {emissions.data.attributes.carbon_g} grams CO<sub>2</sub>e
          </p>
          <p>
            Carbon Emissions per kWh:{" "}
            {emissions.data.attributes.carbon_intensity} grams CO<sub>2</sub>e / kWh
          </p>
        </div>
      )}
    </div>
  );
};

export default MelbourneEmissions;
