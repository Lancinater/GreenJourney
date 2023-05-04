import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './TransportPage.css';
import Alert from 'react-bootstrap/Alert';

const typeValues = {
  large_car: 209.47,
  medium_car: 170.61,
  small_car: 142.08,
  motorbike: 102.89,
  bus: 104.71,
  transit_rail: 35.08,
  large_airplane: 434.46,
  small_airplane: 233.6,
  electric_vehicle: 53.17
};

const TransportPage = () => {
  const [transport1, setTransport1] = useState('large_car');
  const [transport2, setTransport2] = useState('medium_car');

  // Calculate emissions data for the selected transports
  const data = [
    { name: transport1, emissions: typeValues[transport1] },
    { name: transport2, emissions: typeValues[transport2] }
  ];

  // Define options for the transport selection dropdowns
  const transportOptions = Object.keys(typeValues).map((key) => (
    <option key={key} value={key}>{key}</option>
  ));

  // Define the chart configuration
  const chartConfig = {
    width: 500,
    height: 300,
    data: data,
    margin: { top: 20, right: 30, left: 20, bottom: 5 },
    barSize: 20,
    style: { backgroundColor: 'white' },
    className: 'transport-chart'
  };

  return (
    <div className='transportChart'>
      <h1>Transport Emissions</h1>
      <label>
        Select Transport 1:
        <select value={transport1} onChange={(e) => setTransport1(e.target.value)}>
          {transportOptions}
        </select>
      </label>
      <br />
      <label>
        Select Transport 2:
        <select value={transport2} onChange={(e) => setTransport2(e.target.value)}>
          {transportOptions}
        </select>
      </label>
      <br />
      <BarChart {...chartConfig}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: 'Type', position: 'insideBottom' }} />
        <YAxis label={{ value: 'Emission (gCO2e/km)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="emissions" fill="#8884d8" />
      </BarChart>

      <Alert variant="success" style={{ display: 'inline-block' }}>
      Compare the carbon emission of two different types of transport.   
      </Alert>

      <Alert variant="" style={{ display: 'inline-block' }}>
      This two bar comparison chart is used to compare the different average carbon emissions from the 9 different transports ranging from motorbikes to planes. After finishing exploring the different graphs, the transport that produces the most carbon emissions is unsurprisingly the large planes followed by the small planes at the rate of 434.46 and 233.6 gCO2/k respectively. 

On the other hand, the transport that produces the least amount of carbon emissions is not electric vehicles. The transport that produces the least amount of carbon emissions is transit rail with a surprising rate of 35.08 gCO2/k while the electric vehicles have a rate of 53.17 gCO2/k. 

The other transports that are placed from 3rd and 7th are motorbike, bus, and the 3 different sizes of cars from small to big with the emission rates of 102.89, 104.71, 142.08, 170.61 and 209.47 gCO2/k respectively.
   
      </Alert>




    </div>
  );
};

export default TransportPage;