import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import React, {useState} from 'react'
import axios from 'axios'
import CarbonCalculator from './carbonCalculator/CarbonCalculator';
import Weather from './demoAPI/Weather';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Quiz from './quiz/Quiz';
import HomePage from './pages/HomePage';
import NewsPage from './news/NewsPage';
import Information from './pages/Information';
import Chart from './pages/Chart';
import Home from './pages/Home';
import TrafficMap from './pages/TrafficMap';
import CarbonEstimator from './emission/CarbonEstimator';
import TransportPage from './TransportChart/TransportPage';
import Guide from './pages/Guide';
import Footer from './footer/Footer';
import Description from './description/Description';
import TrafficAndCarbonEstimator from './trafficAndCarbonEstimator/TrafficAndCarbonEstimator';
import './layout.css';
import Weather2 from './recommendationweather/Weather';
import OriginMap from './recommendationweather/OriginMap'
import CarbonCal from './TransportChart/CarbonCal'
import Alert from 'react-bootstrap/Alert';
import { LocationContext } from "./LocationContext";

function App() {
  const [destinationLocation, setDestinationLocation] = useState({});

  const handleSetDestination = (location) => {
    setDestinationLocation(location);
  };

  return (
    <Router>
      <NavigationBar />
      <LocationContext.Provider value={{ destinationLocation, setDestinationLocation }}>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
          <NewsPage></NewsPage>
          <Footer></Footer>
        </Route>

        <Route path="/footprint">
          <div className="App">
            <h1>Melbourne Traffic</h1>
            <TrafficAndCarbonEstimator></TrafficAndCarbonEstimator>
          </div>
        </Route>

        <Route path="/quiz">
          <div className="left-component">
            <TransportPage></TransportPage>
          </div>
          <div className="right-component">
            <CarbonEstimator></CarbonEstimator>
          </div>
        </Route>

        <Route path="/travel">
          <div className="left-component">
            <OriginMap destination={destinationLocation}></OriginMap>
          </div>
          <div className="right-component">
            {/* <TransportPage></TransportPage> */}
            <Weather2 onSetDestination={handleSetDestination}></Weather2>
          </div>
        </Route>

        <Route path="/information/state">
          <div>
            <Chart></Chart>
            <Description></Description>
          </div>
        </Route>

        <Route path="/information/transport">
          <div className="left-component">
            <TransportPage></TransportPage>
          </div>
          <div className="right-component">
            <CarbonEstimator></CarbonEstimator>
          </div>
        </Route>

        <Route path="*" render={() => <Redirect to="/guide" />}>
          <div>
            <Guide></Guide>
          </div>
        </Route>
      </Switch>
      </LocationContext.Provider>
    </Router>
  );
}

export default App;