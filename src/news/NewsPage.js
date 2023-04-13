import React from 'react';
import News from './News';
import img1 from '../images/NewsImage1.png';
import img2 from '../images/NewsImage2.png';
import img3 from '../images/NewsImage3.png';
import './NewsPage.css';

function NewsPage() {

  return (
    <div className="NewsPage">
        <h1>On our website, you can do the following things:</h1>
        <div className="NewsList">
                <News
                    img = {img1 }
                    title="Track the Footprint of your Carbon emission!"
                    link="https://www.sustainrecycle.link/footprint"
                />
                <News
                    img = {img2}
                    title="Carbon emissions in different states of Australia!"
                    link="https://www.sustainrecycle.link/information/state"
                />
                <News
                    img = {img3}
                    title="Carbon emissions by different means of transport!"
                    link="http://localhost:3000/information/transport"
                />
        </div>
    </div>
  );
}

export default NewsPage;
