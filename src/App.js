import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import React, { useState } from 'react';
import axios from 'axios';
import CarbonCalculator from './carbonCalculator/CarbonCalculator';
import Weather from './demoAPI/Weather';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
import OriginMap from './map/OriginMap';
import CarbonCal from './TransportChart/CarbonCal';
import ArticlePage from './EducationPage/ArticlePage';
import Alert from 'react-bootstrap/Alert';
import EducationHomePage1 from './EducationPage/EducationHomePage1';


function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
          
          
        </Route>


        <Route path="/education/:id">
          <ArticlePage />
        </Route>
        <Route path="/education">
          <div>
            <EducationHomePage1></EducationHomePage1>
          </div>
        </Route>

        {/* <Route path="/education/:id">
          <ArticlePage />
        </Route> */}
        

        <Route path="/quiz">
          <div className="left-component">
            <TransportPage></TransportPage>
          </div>
          <div className="right-component">
            <CarbonEstimator></CarbonEstimator>
          </div>

        </Route>

        <Route path="/footprint">
          <div className="App">
            <h1>Melbourne Traffic</h1>
            <TrafficAndCarbonEstimator></TrafficAndCarbonEstimator>
          </div>
        </Route>
    

        <Route path="/travel">
        <div className="whole-recommendation">
        <Alert variant="info" className='centered-alert'>
           Enter a destination to get travel suggestions. For example, fill in: Monash university caulfield or Monash university clayton.
        </Alert>
        <div className="middle-recommendation">
            <div className="left-component">
              <OriginMap></OriginMap>
            </div>
            <div className="right-component">
              {/* <TransportPage></TransportPage> */}
              <Weather2></Weather2>
             </div>
         </div>
            <Alert variant="info" className='bottom-alert'>
                Tips:   Are you satisfied with our recommendation results, and want to check more low-carbon travel knowledge?
            </Alert>
         </div>
         <Footer></Footer>
        </Route>

        <Route path="/information/state">
          <div>
            <Chart></Chart>
            <Description></Description>
          </div>
        </Route>

        <Route path="/information/transport">
          <div >
            <TransportPage></TransportPage>
          </div>
          


        </Route>
        
        


        <Route path="*" render={() => <Redirect to="/guide" />}>
          <div>
            <Guide></Guide>

          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;