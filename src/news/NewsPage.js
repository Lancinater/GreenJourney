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
                    link="/quiz"
                />
                <News
                    img = {img2}
                    title="Check Your Car's Emissions"
                    link="/footprint"
                />
                <News
                    img = {img3}
                    title="Transport Emissions Comparison"
                    link="/information/transport"
                />
                <News
                    img = {img4}
                    title = "Map Traffic"
                    link = "/footprint"
                />
        </div>
    </div>
  );
}

export default NewsPage;
