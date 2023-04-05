import Highcharts from 'highcharts';
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';

function Chart() {
    const options = {
      title: {
        text: 'Carbon Emission, 2010-2020',
        align: 'center'
      },
      xAxis: {
        title: {
          text: 'Year'
        },
        categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
      },
      yAxis: {
        title: {
          text: 'Carbon Emission (tonnes per capita)'
        }
      },
      // Other Highcharts chart configuration options
      // ...
      series: [
              
      {
        name: 'VIC',
        data: [23.83946828, 24.87435139, 24.29237677, 24.27188087, 22.50049338, 19.87226706, 19.34438186, 19.28060015, 18.03386354, 17.44794226]
      },
      {
        name: 'NSW',
        data: [23.73149082, 22.33426722, 20.78851709, 20.88433186, 20.55523,19.0952626, 18.74327727, 17.68878253, 17.13453221, 16.70928609]
      },
      {
        name: 'QID',
        data: [43.13075188, 40.0652375, 38.8976762, 35.67414152, 35.76816099, 34.3523278, 32.98669833, 33.08322758, 32.64874315, 32.77810578]
      },
      {
        name: 'SA',
        data: [21.19074968, 19.03130477, 16.07568882, 14.60450126, 15.73557384, 15.70992144, 17.08915603, 16.30692444, 14.04385737, 12.81183598]
      }
    
    ]
    };
  
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
  
  export default Chart;
  