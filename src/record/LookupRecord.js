import React from "react";
import '../assets/css/style.css';
import { useState , useEffect} from 'react';
import Highcharts from 'highcharts';

export default function LookupRecord() {

    const [referenceCode, setReferenceCode] = useState('');
    const [recordData, setRecordData] = useState({});

    const [resulttype,setResultType] = useState(false);

    

    const handleSubmit = async (event) => {
        event.preventDefault();

    try {
        const response = await fetch(`https://www.sustrecyclefree.me/trackRecord/findRecord?referenceCode=${referenceCode}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          

        if (response.ok) {
            const data = await response.json();
            setRecordData(data);
            setResultType(true);
            console.log(111111);
            console.log(data);
            console.log(recordData);
        } else {
            console.error('Error retrieving record:', response.status);
        }
        } catch (error) {
        console.error('Error retrieving record:', error);
        }
    };

    const updateTable = () => {
        if (!recordData) return null;
    
        return (
          <table style={{ margin: '20px auto', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Day of Week</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Distance (km)</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Carbon Footprint (kg)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(recordData.data).map(([day, { distance, carbonFootprint }]) => (
                <tr key={day}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{day}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{distance}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{carbonFootprint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
      

     
         
   

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={referenceCode}
              onChange={(event) => setReferenceCode(event.target.value)}
              placeholder="Enter reference code"
            />
            <button type="submit">Submit</button>
          </form>
    
          {resulttype && (
            <>
              <h3>Reference Code: {recordData.referenceCode}</h3>
              <h3>Record Date: {recordData.date}</h3>
              {updateTable()}
    
              
            </>
          )}
        </div>
      );

}