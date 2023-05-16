import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import {
  GoogleMap,
  LoadScript,
  TrafficLayer,
  Marker,
  DistanceMatrixService,
} from "@react-google-maps/api";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import './Record.css';
import Highcharts from "highcharts";
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";


const Record = () => {
  const [inputDistance, setInputDistance] = useState("");
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [transportation, setTransportation] = useState("car");
  const [dayOfWeek, setDayOfWeek] = useState("Monday");
  const [carbonEmission, setCarbonEmission] = useState("");
  const [referenceCode,setReferenceCode] = useState("");
  const [showReferenceCode,setShowReferenceCode] = useState(false);
  const [currentDay,setCurrentDay] = useState("");

  const [results, setResults] = useState({
    Monday: { distance: 0, carbonFootprint: 0 },
    Tuesday: { distance: 0, carbonFootprint: 0 },
    Wednesday: { distance: 0, carbonFootprint: 0 },
    Thursday: { distance: 0, carbonFootprint: 0 },
    Friday: { distance: 0, carbonFootprint: 0 },
  });


  const handleInputDistanceChange = (event) => {
    setInputDistance(event.target.value);
  };


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
    setError("");
    if (inputDistance === "" && destination === "") {
      setError("Please enter your destination or the distance!");
      return;
    }


    if (inputDistance !== "" && parseFloat(inputDistance) > 0) {
      setError(""); // 清除错误提示
      const distanceResult = parseFloat(inputDistance);
      setDistance(distanceResult);
      calculateCarbonEmission(distanceResult);
    } else {
    if (inputDistance !== "" && parseFloat(inputDistance) >= 0) {
      const distanceResult = parseFloat(inputDistance);
      setDistance(distanceResult);
      calculateCarbonEmission(distanceResult);
    } else {
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
            setError("Invalid destination. Please try again.");
          } else {
            const elementStatus = response.rows[0].elements[0].status;
            if (elementStatus === "NOT_FOUND" || elementStatus === "ZERO_RESULTS") {
              setError("Invalid destination. Please try again.");
            } else {
              const distanceResult = response.rows[0].elements[0].distance.value / 1000;
              setDistance(distanceResult);
              calculateCarbonEmission(distanceResult);
            }
          }
        } else {
          setError("Error: " + status);
        }
      }
    );}}
  };


  const handleReset = () => {
    setInputDistance("");
    setDestination("");
    setError("");
    setShowResults(false);


    const resetResults = {
      Monday: { distance: 0, carbonFootprint: 0 },
      Tuesday: { distance: 0, carbonFootprint: 0 },
      Wednesday: { distance: 0, carbonFootprint: 0 },
      Thursday: { distance: 0, carbonFootprint: 0 },
      Friday: { distance: 0, carbonFootprint: 0 },
    };
    setResults(resetResults);
    updateHighchart(resetResults);
  };


  const calculateCarbonEmission = (distance) => {
    let emissionFactor = 0;
    switch (transportation) {
      case "car":
        emissionFactor = 2.50;
        break;
      case "bus":
        emissionFactor = 2.00;
        break;
      case "plane":
        emissionFactor = 0.200;
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


  const generateReferenceCode = async () => {
    try {
      const response = await fetch("https://www.sustrecyclefree.me/codes/generate");
      const responseData = await response.text();
      console.log(responseData); // Log the response data
  
      return responseData; // Return the response data as the reference code
    } catch (error) {
      console.error("Error generating reference code:", error);
      return null;
    }
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




  useEffect(() => {
    if (showResults) {
      updateHighchart(results);
    }
  }, [results]);


  const updateHighchart = (results) => {
    const categories = Object.keys(results);
    const carbonFootprintData = categories.map((day) => results[day].carbonFootprint);


    Highcharts.chart("container", {
      chart: {
        type: "line",
      },
      title: {
        text: "Carbon Footprint by Day of Week",
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: "Carbon Footprint (kg)",
        },
      },
      series: [
        {
          name: "Carbon Footprint",
          data: carbonFootprintData,
        },
      ],
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
    calculateDistance();
  };


  const onLoad = React.useCallback(function onLoad() {
    // Your code to initialize Google Maps goes here
  }, [])




  const calculateTotalCarbonFootprint = () => {
    const totalCarbonFootprint = Object.values(results).reduce((total, { carbonFootprint }) => total + carbonFootprint, 0);
    return totalCarbonFootprint;
  };
 
  const totalCarbonFootprint = calculateTotalCarbonFootprint();
 
  let alertVariant = "success";
  let alertMessage = "Based on the global annual allocated carbon emissions and the global population, the average per capita weekly carbon emissions should be kept within the range of 104 to 156 kilograms of CO2e.This week's carbon footprint is very low. Keep up the good work! You showed personal strength and responsibility and made an important contribution to our planet. <br /><br /> At the same time, I hope you will continue to take energy-saving measures, such as turning off unnecessary electrical appliances, using energy-efficient equipment, improving insulation and energy-saving facilities, etc.; in terms of travel, ride a bicycle and use public transportation to reduce personal car use. These modes of transport typically have lower carbon emissions.";
 
  if (totalCarbonFootprint >= 104 && totalCarbonFootprint <= 156) {
    alertVariant = "warning";
    alertMessage = "Your weekly per capita carbon emissions are at normal levels! Hope to continue to work hard to contribute to the environmental protection of our planet. <br /><br /> At the same time, I hope you will continue to take energy-saving measures, such as turning off unnecessary electrical appliances, using energy-efficient equipment, improving insulation and energy-saving facilities, etc.; in terms of travel, ride a bicycle and use public transportation to reduce personal car use. These modes of transport typically have lower carbon emissions, while also helping to improve air quality and traffic congestion. Reduce waste generation, recover and recycle renewable resources wherever possible. Use reusable shopping bags when shopping.";
   
   
  } else if (totalCarbonFootprint > 156) {
    alertVariant = "danger";
    alertMessage = "Your weekly carbon emissions are high, we need to focus on environmental protection and the severity of climate change. Please think hard and take action to reduce your carbon footprint. <br /><br /> Here are some suggestions: turn off unnecessary appliances, use energy-efficient appliances, improve insulation and energy-saving facilities, etc.; in terms of travel, use bicycles and use public transport to reduce personal car use. These modes of transport typically have lower carbon emissions, while also helping to improve air quality and traffic congestion. Reduce waste generation, recover and recycle renewable resources wherever possible. Use reusable shopping bags when shopping, reduce the use of single-use packaging, and implement effective recycling policies at home.";
   
  }


  const handleSave = () => {
    setShowReferenceCode(true);
    const currentDate1 = format(new Date(), 'yyyy-MM-dd');
    setCurrentDay(currentDate1);
  
    generateReferenceCode()
      .then((code1) => {
        setReferenceCode(code1);
      })
      .catch((error) => {
        console.error("Error generating reference code:", error);
        setReferenceCode(null);
      });
  };
  

  const saveData = () => {
    const data = {
      "date": currentDay,
      "referenceCode": referenceCode,
      "data": results
    };
   console.log(data)
    fetch("https://www.sustrecyclefree.me/trackRecord/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log("Data saved successfully");
          // Handle success scenario here (e.g., show a success message)
        } else {
          console.error("Error saving data:", response.status);
          // Handle error scenario here (e.g., show an error message)
        }
      })
      .catch(error => {
        console.error("Error saving data:", error);
        // Handle error scenario here (e.g., show an error message)
      });
  };
  

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([referenceCode], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'reference_code.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    saveData();
  };


  
   
 
  

  return (
    <div className="calbackground">
      <LoadScript googleMapsApiKey={apiKey} onLoad={onLoad}>
      <h1>Show your weekly Carbon Footprint</h1>
      <Alert variant="dark" style={{ display: 'inline-block' }}>
      Please fill in your destination and departure date, for example, select Monday as the date and go to Monash university caulfield as your destination.
      </Alert>
      <form onSubmit={handleSubmit}>
       
        <label className="label-text">
          Transportation: <br />
          <select value={transportation} onChange={handleTransportationChange}>
            <option value="car">Fuel vehicles</option>
            <option value="bus">Hybrid vehicles</option>
            <option value="plane">Electric vehicles</option>
          </select>
        </label>
        <br />
        <label className="label-text">
          Day of Week:  <br />
          <select value={dayOfWeek} onChange={handleDayOfWeekChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </label>
        <br />
        <label className="label-text">
          Destination:  <br />
          <input type="text" value={destination} onChange={handleDestinationChange} />
        </label>
        <br />
        <label className="label-text">
            Distance (KM):  <br />
            <input
              type="number"
              min="0"
              step="any"
              value={inputDistance}
              onChange={handleInputDistanceChange}
            />
          </label>
          <br />
        <Button type="submit" variant="outline-info" size="lg">Submit it</Button>
        <Button type="button" onClick={handleReset} variant="outline-info" size="lg" style={{ marginLeft: "10px" }}>
          Reset
        </Button>
        <a href="/track/previousRecord">Click here to see previous record</a>
      </form>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      {showResults && (
      <table style={{ margin: "20px auto", borderCollapse: "collapse", textAlign: "center" }}>
      <thead>
        <tr>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Day of Week</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Distance (km)</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Carbon Footprint (kg)</th>
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


      <div id="container" style={{ width: "100%", height: "400px", marginTop: "20px" }}></div>
      </LoadScript>
      <Alert variant={alertVariant}>
        <div dangerouslySetInnerHTML={{ __html: alertMessage }} />
       
      </Alert>
      {showResults && <div class="col-lg-12">
        <Button onClick={handleSave}>Save the result</Button>
      </div>}
      {showReferenceCode && (
      <div className="result-container">
      <p>Date: {currentDay}</p>
      <h3>Reference Code: {referenceCode}</h3>
      <Button onClick={handleDownload}>Download as Text File</Button>
      
    </div>
     
      )}
    </div>
   
  );
}


export default Record;  

