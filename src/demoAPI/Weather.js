import React, {useState} from 'react'
import axios from 'axios'


function Weather() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=88e2ff032ca8b683249ce94aef6dd767`

  
  const searchLocation = (event) =>{
    if (event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
      })
      setLocation('')
    }
  }

  
  const getTravelRecommendation = () => {
    if (!data.weather) return null;

    const weather = data.weather[0].main;
    const temp = data.main.temp;

    if (weather === 'Rain' || weather === 'Drizzle') {
      return 'It is currently raining, consider taking a car or public transportation instead of walking.'
    } else if (weather === 'Snow') {
      return 'It is currently snowing, consider taking a car or public transportation instead of walking.'
    } else if (temp > 85) {
      return 'It is currently very hot outside, consider taking a car or public transportation instead of walking.'
    } else if (temp < 40) {
      return 'It is currently very cold outside, consider taking a car or public transportation instead of walking.'
    } else {
      return 'The weather is nice, feel free to walk or bike to your destination!'
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>  

      <div className='container'>
        <div className='top'>
           <div className='location'>
            <p>{data.name}</p>
           </div>

           <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> :null}            
           </div>

           <div className='description'>
           {data.weather ? <p className='bold'>{data.weather[0].main}</p> :null}
           </div>

           {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> :null}

              <p>Feels Like</p>
            </div>
            <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> :null}             
              <p>Humidity</p>
            </div>
            <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> :null}
              <p>Wind Speed</p>              
            </div>
          </div>}

          <div className='travel-recommendation'>
            {getTravelRecommendation()}
          </div>

        </div>
      </div>
      
    </div>

  );
}

export default Weather;
