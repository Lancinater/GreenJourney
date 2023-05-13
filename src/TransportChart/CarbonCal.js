import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './CarbonEstimator.css';
import Alert from 'react-bootstrap/Alert';

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
      {/* <Alert variant="primary">
        A carbon calculator is a tool that helps people calculate their carbon emissions from the way they live, work or travel, etc. 
      </Alert> */}

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
        <Button type="submit" variant="outline-success" size="lg" >Calculate</Button>
      </form>
      <div className="results-total">
        <h2>Total: {resultsList.reduce((a, b) => a + b, 0)}</h2>
        <Button onClick={handleReset} variant="outline-info" size="lg" >Reset</Button>
      </div>
      {/* <Alert variant="primary">
        It usually calculates and displays the corresponding carbon emissions based on the data provided by the user (such as energy usage, transportation mode, eating habits, etc.). These calculations can help people understand the size of their carbon footprint, and promote people to take action to reduce carbon emissions, in order to combat climate change and slow down the impact of global warming.
      </Alert> */}
    </div>
  );
};

export default CarbonEstimator;
