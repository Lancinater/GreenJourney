import React from "react";
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';
import pic1 from'../assets/img/features-1.svg'
import pic2 from'../assets/img/features-2.svg'
import pic3 from'../assets/img/features-3.svg'
import pic4 from'../assets/img/features-4.svg'
import pic5 from'../assets/img/features-5.svg'
import { Link } from 'react-router-dom';

export default function HomeFeatures() {

    return(
        <>
  <section id="123" className="features">
    <div className="container" >
      <div className="section-title">
        <h2>Features</h2>
        <p>
        This is where we give some brief descriptions on the different features our website has to offer.
        </p>
      </div>
      <div className="row" data-aos="fade-up">
      
        <div className="col-md-5">
          <img src={pic1} className="img-fluid" alt="" />
        </div>
        <a href="/footprint"  className="col-md-7 pt-4">
          <h3>
            Footprint Calculator
          </h3>
          <p className="fst-italic">
          Calculate the distance to your destination, then use the distance with transportation information in the carbon estimator to calculate the carbon emissions.
          </p>
          
        </a>
        
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-md-5 order-1 order-md-2">
          <img src={pic2} className="img-fluid" alt="" />
        </div>
        <a href="/education" className="col-md-7 pt-5 order-2 order-md-1">
          <h3>Carbon Emission Information</h3>
          <p className="fst-italic">
            Compare different types of vehicles and their carbon emission rate on a two bar comparison chart. See carbon emission from past to the estimated future across different states in Australia.
          </p>
        </a>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-md-5">
          <img src={pic3} className="img-fluid" alt="" />
        </div>
        <a href="/travel" className="col-md-7 pt-5">
          <h3>
            Travel Recommendation
          </h3>
          <p>
          Get travel recommendations to the desired location. We will consider weather, location, time, carbon emission rate and availability of the buses.

          </p>
          
        </a>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-md-5 order-1 order-md-2">
          <img src={pic4} className="img-fluid" alt="" />
        </div>
        <a href="/education" className="col-md-7 pt-5 order-2 order-md-1">
          <h3>
            Learning About Carbon Emission
          </h3>
          <p className="fst-italic">
          Learn the benefits of reducing carbon emissions in the atmosphere. Take a quiz to test your knowledge.

          </p>
          
        </a>
      </div>
      <div className="row" data-aos="fade-up">
      
        <div className="col-md-5">
          <img src={pic5} className="img-fluid" alt="" />
        </div>
        <a href="/track"  className="col-md-7 pt-4">
          <h3>
            Track your daily emissions
          </h3>
          <p className="fst-italic">
          Track your daily carbon emissions in the working days. The recorded data will be displayed on a graph and on a table for easier visualisation.
          </p>
          
        </a>
        
      </div>
    </div>
  </section>
  {/* End Features Section */}
  {/* End #main */}
</>

    );
}