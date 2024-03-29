import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import HomeHero from './homepage/homehero';
import HomeFeatures from './homepage/homefeatures';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState , useEffect} from 'react';
import Footer from './footer/Footer';
import React from 'react';
import SubHeader from './subheader/Subheader';
import TrafficAndCarbonEstimator from './trafficAndCarbonEstimator/TrafficAndCarbonEstimator';
import Weather2 from './recommendationweather/Weather';
import Alert from "react-bootstrap/Alert";
import Record from './record/Record';
import EducationHomePage1 from './EducationPage/EducationHomePage1';
import Chart from './pages/Chart';
import TransportPage from './TransportChart/TransportPage';
import Description from './description/Description';
import Guide from './guide/Guide';
import Quiz from './quiz/Quiz';
import ArticlePage from './EducationPage/ArticlePage';
import LookupRecord from './record/LookupRecord';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <>
            <HomeHero />
            <HomeFeatures />
          </>} />

        <Route path="/footprint" element={
          <main id="main">
            
            <div className="calbackground">
            <TrafficAndCarbonEstimator/>
            </div>
          </main>}/>
          
       

        <Route path="/travel" element={
          <main id="main">
           
        <div className="whole-recommendation">

        <div className="middle-recommendation">
            <div className="calbackground">              
              <Weather2></Weather2>
            </div>
         </div>

         </div>
          </main>}>
      
        </Route>

        <Route path="/education/:id" element = {
           <main id="main">

            <ArticlePage />
         </main>
        }></Route>
          
      
        
        
        <Route path="/education" element={
          <main id="main">

            <EducationHomePage1></EducationHomePage1>
            <Quiz></Quiz>
          </main>}>
        
        </Route> 



        <Route path="/information/state" element={
          <main id="main">

            <div className="calbackground"> 
            <Chart></Chart>
            <Description></Description>
            </div>
          
          </main>}>
        
        </Route>

        <Route path="/information/transport" element={
          <main id="main">
  
            <div className="calbackground"> 
            <TransportPage></TransportPage>
            </div>
          </main>}>
        
        </Route>

        <Route path="/track" element={
          <main id="main">

            <Record></Record>
          </main>}>
        </Route>
        
        <Route path="*" element={<main id="main">

            <Guide></Guide>
          </main>} />

          <Route path="/track/previousRecord" element={
          <main id="main">

            <LookupRecord></LookupRecord>
          </main>}>

        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
