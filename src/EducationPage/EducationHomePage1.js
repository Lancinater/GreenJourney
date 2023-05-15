import * as React from 'react';
import './EducationHomepage1.css';
import what_cover from './what_article.jpg';
import how_cover from './how_cover.jpg';
import benefit_cover from './benefit_cover.jpg';
import { Link } from 'react-router-dom';

function EducationHomePage1() {
  const [showArrow, setShowArrow] = React.useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="education-page">
      <h1>Do you know?</h1>
      <p>learn something about carbon emission!</p>
      <h3>Related Information</h3>
      
      <section className="edusection">
        <article className="eduarticle">
          <h2>What is carbon emissions?</h2>
          <img className="imageset" src={what_cover} alt="DIY" />
          <a href="/education/a1">Read More</a>
        </article>
        <article className="eduarticle">
          <h2>How is it affecting us?</h2>
          <img className="imageset" src={how_cover} alt="DIY" />
          <a href="/education/a2">Read More</a>
        </article>
        <article className="eduarticle">
          <h2>What is the influence?</h2>
          <img className="imageset" src={benefit_cover} alt="DIY" />
          <a href="/education/a3">Read More</a>
        </article>
        
      </section>
      {showArrow && (
        <div className="down-arrow">
          <a href="#quiz-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
              width="150px"
              height="150px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </a>
          <p>scroll down to see more</p>
        </div>
      )}
      
    </div>
  );
}

export default EducationHomePage1;
