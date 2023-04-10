// src/components/CarbonEstimator/CarbonEstimator.js
import React, { useState } from 'react';
import './CarbonEstimator.css';

const CarbonEstimator = () => {
  const [formData, setFormData] = useState({
    type: '',
    distance: '',
  });

  const [resultsList, setResultsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const typeValues = {
    car: 1,
    motorbike: 2,
    bus: 3,
    transit_rail: 4,
    large_airplane: 5,
    small_airplane: 6,
  };

  const handleChange = (e) => {
    if (e.target.name === "distance") {
      const inputValue = e.target.value;
      if (inputValue < 0) {
        setErrorMessage("Distance cannot be a negative number.");
      } else if (inputValue === 0) {
        setErrorMessage("Distance cannot be 0.");
      } else {
        setErrorMessage("");
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.distance === "0") {
      setErrorMessage("Distance cannot be 0.");
      return;
    }

    const calculatedResult = formData.distance * typeValues[formData.type];
    setResultsList([...resultsList, calculatedResult]);
  };

  const handleReset = () => {
    setResultsList([]);
  };

  return (
    <div className="carbon-estimator">
      <h1>Carbon Estimator</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="type">Type:</label>
        <select className="select" name="type" id="type" value={formData.type} onChange={handleChange} required>
          <option value="">--Choose Type--</option>
          <option value="car">Car</option>
          <option value="motorbike">Motorbike</option>
          <option value="bus">Bus</option>
          <option value="transit_rail">Transit Rail</option>
          <option value="large_airplane">Large Airplane</option>
          <option value="small_airplane">Small Airplane</option>
        </select>
        <br />
        <label htmlFor="distance">Distance (km):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          min="0"
          required
        />
           {errorMessage && (
             <p className="error-message">{errorMessage}</p>)}
        <br />
        <button type="submit">Calculate</button>
      </form>
      <div className="results-total">
        <h2>Total: {resultsList.reduce((a, b) => a + b, 0)}</h2>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CarbonEstimator;
