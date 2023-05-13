import React from 'react';
import './Information.css';

// Import images
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function Information() {
  return (
    <div className="information-container">

      <div className="image-row">
        <div className="image-item">
          <a href="/news1">
            <img src={image1} alt="News 1" style={{height: '300px'}} />
          </a>
        </div>

        <div className="image-item">
          <a href="/news2">
            <img src={image2} alt="News 2" style={{height: '300px'}} />
          </a>
        </div>

        <div className="image-item">
          <a href="/news3">
            <img src={image3} alt="News 3" style={{height: '300px'}} />
          </a>
        </div>
      </div>

      <div className="button-row">
        <div className="button-item">
          <a href="/news1" className="button">View</a>
        </div>

        <div className="button-item">
          <a href="/news2" className="button">View</a>
        </div>

        <div className="button-item">
          <a href="/news3" className="button">View</a>
        </div>
      </div>
      
    </div>
  );
}

export default Information;
