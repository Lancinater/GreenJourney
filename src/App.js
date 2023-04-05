import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import DemoAPI from './demoAPI/DemoAPI';
import React, {useState} from 'react'
import axios from 'axios'
import CarbonCalculator from './carbonCalculator/CarbonCalculator';
import Weather from './demoAPI/Weather';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quiz from './quiz/Quiz';
import HomePage from './pages/HomePage';
import NewsPage from './news/NewsPage';
import Information from './pages/Information';
import Chart from './pages/Chart';
import Home from './pages/Home';
import TrafficMap from './pages/TrafficMap';
import CarbonEstimator from './emission/CarbonEstimator';
import TransportPage from './TransportChart/TransportPage';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
             <HomePage></HomePage>
             <NewsPage></NewsPage>
             
        </Route>

        <Route path="/footprint">
          <div>
           <div className="App">
             <h1>Melbourne Traffic</h1>
             <h2 className= "font-size">current traffic conditions in Melbourne</h2>
             <TrafficMap />
           </div>
           

           <div className="background">
             <h1>Travel By Car</h1>
             <CarbonCalculator></CarbonCalculator>
           </div>                                   
          </div>         
        </Route>

        <Route path="/quiz">
          <Quiz></Quiz>
        </Route>
        
        <Route path="/travel">
        <Weather></Weather> 
        </Route>

        <Route path="/information/city">
          <div> 
            <Chart></Chart>
            <Quiz></Quiz>
          </div>
        
        </Route>

        <Route path="/information/transport">
        <div> 
          <CarbonEstimator></CarbonEstimator>
          <TransportPage></TransportPage>
          </div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;