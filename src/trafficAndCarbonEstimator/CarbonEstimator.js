import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const CarbonEstimator = ({ distance }) => {
  const [formData, setFormData] = useState({
    type: '',
    distance: '',
    brand: '',
    model: '',
    size: ''
  });

  const [emissionFromDatabase,setEmissionFromDatabase] = useState("");

  const [resultOfCal,setResultOfCal] = useState(0);


  //const [resultsList, setResultsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);

  useEffect(() => {
    if (distance) {
      setFormData({ ...formData, distance: parseFloat(distance) });
    }
  }, [distance]);

  const typeValues = {
    motorbike: 2,
    bus: 3,
    transit_rail: 4,
    large_airplane: 5,
    small_airplane: 6,
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setFormData({ ...formData, type, brand: '', model: '', size: '' });
    setBrandOptions([]);
    setModelOptions([]);
    setSizeOptions([]);

    if (type === 'car') {
      fetch('https://www.sustrecyclefree.me/emissions/allCarBrand')
        .then(response => response.json())
        .then(brands => setBrandOptions(brands))
        .catch(error => console.error(error));
    }
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setFormData({ ...formData, brand, model: '', size: '' });
    setModelOptions([]);
    setSizeOptions([]);

    fetch(`https://www.sustrecyclefree.me/emissions/carModelByBrand?aBrand=${brand}`)
      .then(response => response.json())
      .then(models => setModelOptions(models))
      .catch(error => console.error(error));
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setFormData({ ...formData, model, size: '' });
    setSizeOptions([]);
    
    fetch(`https://www.sustrecyclefree.me/emissions/carSizeByBrandAndModel?aBrand=${formData.brand}&aModel=${model}`)
      .then(response => response.json())
      .then(sizes => {
        setSizeOptions(sizes);
        
       
      })
      .catch(error => console.error(error));
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
    console.log(emissionFromDatabase);
    if (formData.type === "Car")
    {
      setResultOfCal(formData.distance * emissionFromDatabase);
    }
    else {
      setResultOfCal(formData.distance * typeValues[formData.type]);
    }

    
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setFormData({ ...formData, size});

    fetch(`https://www.sustrecyclefree.me/emissions/getTheCarInfo?aBrand=${formData.brand}&aModel=${formData.model}&aSize=${e.target.value}`)
    .then(response => response.json())
    .then(data => {
      const transportEmission = data.transportEmission;
      setEmissionFromDatabase(transportEmission);
    })
    .catch(error => console.error(error));

  }

  const handleReset = () => {
    setResultOfCal(0);
  };

  return (
    <div className="carbon-estimator">
      <h1>Carbon Estimator</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="type">Type:</label>
        <select className="select" name="type" id="type" value={formData.type} onChange={handleTypeChange} required>

          <option value="">--Choose Type--</option>
          <option value="car">Car</option>
          <option value="motorbike">Motorbike</option>
          <option value="bus">Bus</option>
          <option value="transit_rail">Transit Rail</option>
          <option value="large_airplane">Large Airplane</option>
          <option value="small_airplane">Small Airplane</option> 
        </select>
        {formData.type === 'car' && (
          <>
            <label htmlFor="brand">Brand:</label>
            <select className="select" name="brand" id="brand" value={formData.brand} onChange={handleBrandChange}>
              <option value="">--Select a brand--</option>
              {brandOptions.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
            <label htmlFor="model">Model:</label>
            <select className="select" name="model" id="model" value={formData.model} onChange={handleModelChange}>
              <option value="">--Select a model--</option>
              {modelOptions.map(model => <option key={model} value={model}>{model}</option>)}
            </select>
            <label htmlFor="size">Size:</label>
            <select className="select" name="size" id="size" value={formData.size} onChange={handleSizeChange}>
              <option value="">--Select a size--</option>
              {sizeOptions.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </>
        )}
        <br />
        <label htmlFor="distance">Distance (km):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          min="0"
        step="any"
          required
        />
           {errorMessage && (
             <p className="error-message">{errorMessage}</p>)}
        <br />
        <Button type="submit" variant="outline-success" size="lg" >Calculate</Button>
      </form>
      <div className="results-total">
        {/* <h2>Total: {resultsList.reduce((a, b) => a + b, 0)}</h2> */}
        <h2>Total: {resultOfCal}</h2>
        <Button onClick={handleReset} variant="outline-info" size="lg" >Reset</Button>
      </div>
      <Alert variant="primary" className="alert-margin" >
       Calculated carbon emissions based on the data you provide.
      </Alert> 
    </div>
  );
};

export default CarbonEstimator;
