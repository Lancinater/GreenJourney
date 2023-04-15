import React from 'react';
import News from './News';
import img1 from '../images/quiz.png';
import img2 from '../images/CarEmission.png';
import img3 from '../images/EmissionComparison.png';
import img4 from '../images/MapTraffic.png';
import './NewsPage.css';


function NewsPage() {

  return (
    <div className="NewsPage">
        <h1>Check Our Features</h1>
        <div className="NewsList">
                <News
                    img = {img1 }
                    title="Quiz"
                    description="This quiz is used to test the user’s knowledge to see if they know what is the current situation in Australia with climate change. What is the rate of carbon emissions Australia produces, What are the top producers of carbon emissions in Australia and many more. This feature is important because this can make sure the users can be tested if they know what they learned from the learning page to solidify their knowledge into them."
                    link="/quiz"
                />
                <News
                    img = {img2}
                    title="Check Your Car's Emissions"
                    description="This feature is used to compare the different types of vehicles and their carbon emission rate. This includes different sizes of transport from small transport like bikes, to big transport like aeroplanes. This is important because it allows users to check which transport produces more carbon emissions. With this information, the users are able to plan out what transport they should use to go to their desired destinations while also saving carbon emissions."
                    link="/footprint"
                />
                <News
                    img = {img3}
                    title="Transport Emissions Comparison"
                    description="This feature is used to compare between two different types of transport on which of the transport produces more carbon emissions. This is important because it gives users the knowledge that what is the estimated rate of their transport is harming the environment. There’s a range of different transport options available ranging from the carbon emission of a motorbike to the carbon emissions of planes."
                    link="/information/transport"
                />
                <News
                    img = {img4}
                    title = "Map Traffic"
                    description="This feature is used to check what is the current live update of the traffic in Australia. It is important as it gives users more detailed information on what transport they should take for their daily lives to reduce the carbon emission produced from them and still be able to travel comfortably to their desired location. By checking the current traffic in Australia will allow the user to make the decision of whether driving to their destination, taking a local transport, or riding a bike is more suitable and comfortable for them while also producing less carbon emissions."
                    link = "/footprint"
                />
        </div>
    </div>
  );
}

export default NewsPage;
