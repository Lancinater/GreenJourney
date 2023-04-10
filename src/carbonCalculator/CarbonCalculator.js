import React, { useState } from 'react';
import styles from './CarbonCalculator.module.css';
import audiImage from './audi.jpg';
import arucaImage from './aruca.jpg';

const CAR_BRANDS = [
  {
    name: "ACURA",
    models: [
      { name: "COMPACT", emission: 160 },
      { name: "MID-SIZE", emission: 230 },
      { name: "FULL-SIZE", emission: 250 }
    ]
  },
  {
    name: "AUDI",
    models: [
      { name: "COMPACT", emission: 200 },
      { name: "MID-SIZE", emission: 230 },
      { name: "FULL-SIZE", emission: 250 }
    ]
  },
  {
    name: "Other",
    models: [
      { name: "COMPACT", emission: 180 },
      { name: "MID-SIZE", emission: 210 },
      { name: "FULL-SIZE", emission: 230 }
    ]
  }
];

function CarbonCalculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState("");
  const [suggestion, setSuggestion] = useState("");
  
  function handleBrandChange(event) {
    setBrand(event.target.value);
    setModel("");
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleDistanceChange(event) {
    const inputValue = event.target.value;
    if (inputValue < 0) {
      setDistance(0);
    } else {
      setDistance(inputValue);
    }
  }

  function getSuggestion(carbonTotal) {
    if (carbonTotal > 1000) {
      return "Consider carpooling, using public transportation, or switching to an electric or hybrid vehicle to reduce your carbon emissions.";
    }
    return "";
  }

  


  function handleSubmit(event) {
    event.preventDefault();
    if (distance === "0") {
      setResult("Distance cannot be 0.");
      setSuggestion("");
      return;
    }
    
    const carModel = CAR_BRANDS.find(b => b.name === brand)?.models.find(m => m.name === model); // find the model
    if (carModel && distance) {
      const carbonEmission = carModel.emission;
      const carbonTotal = carbonEmission * distance;
      setResult(`${carbonTotal} g`);
      setSuggestion(getSuggestion(carbonTotal));
    } else {
      setResult("Please select brand, model, and distance");
      setSuggestion("");
    }
  }

  return (
    <div className={styles['carbon-calculator-container']}>
    <div className={styles['form-container']}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Choose The Brand:
          <select value={brand} onChange={handleBrandChange} className={styles.select}>
            <option value="">--Select Brand--</option>
            {CAR_BRANDS.map(b => (
              <option key={b.name} value={b.name}> 
                {b.name}
              </option>
            ))}
          </select>
        </label>

        {brand && (
          <label className={styles.label}>
            Choose a car model:
            <select value={model} onChange={handleModelChange} className={styles.select}>
              <option value="">--Select Model--</option>
              {CAR_BRANDS.find(b => b.name === brand)?.models.map(m => (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
        )}

        {model && (
          <label className={styles.label} >
            Distance driven (km):
            <input type="number" value={distance} onChange={handleDistanceChange} className={styles.select} min="0" />
          </label>
        )}
        <div className={styles['button-container']}>
        <button type="submit" className={styles.button}>Calculate</button>
        </div>
      </form>
      </div>

      <div className={styles['image-container']}>
      {brand === "AUDI" && <img src={audiImage} alt="Audi" />}
      {brand === "ACURA" && <img src={arucaImage} alt="Aruca" />}
      </div>
      
      <div className={styles['form-container']}> 
      {result && (
        <>
          <p>Carbon emission: {result}</p>
          {suggestion && <p className="suggestion">{suggestion}</p>}
        </>
      )}
      </div>



    </div>
  );
}

export default CarbonCalculator;
