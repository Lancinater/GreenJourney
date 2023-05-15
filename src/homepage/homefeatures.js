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
          This feature is used to calculate the distance between the current position the user is in right now to their desired destination. The distance will then be added into the carbon estimator to calculate the carbon emissions based on the transport to location.
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
            This feature is used to compare the different types of vehicles and their carbon emission rate on a two bar comparison chart. This includes different sizes of transport from small transport like bikes, to big transport like aeroplanes.

          </p>
          <p>
          This feature also display the carbon emission from 1990 to the estimated future of 2036. This is to show the change in carbon emissions in Australia and how bad it will turn out in the future.


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
          This feature is used to give recommendations to the user on the different ways to go to their desired location. The factors that affect the recommendation are the weather, location, time, carbon emission rate and availability of the buses. There will also be a recommendation message beneath it to further notice the user.

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
          This feature is to give the user some knowledge about what carbon emissions are and how it is affecting us. Lastly, it also provides the benefits of reducing carbon emissions in the atmosphere.

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
          This feature is for users to save their daily carbon emissions in the working days. It records down the type of transportation used, working days, distance travelled and carbon emissions produced. The recorded data will then be displayed on a graph and on a table for easier visualisation for the users.
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