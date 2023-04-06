import React from 'react';
import './HomePage.css';
import homeVideo from '../videos/homeVideoEdited.mp4';
import styles from './Home.module.css';

function HomePage() {
  
  return (
    <div>
      <header className="hero-box">
        <section className="hero-image-box">
              <video className="hero-video" src={homeVideo} autoPlay muted loop></video>
        </section>
        <section className="hero-text-box">
            <h1 className="hero-heading">GreenJourney</h1>
            <p className="hero-text">Our website is dedicated to providing you with practical advice on energy conservation and emission reduction, the latest developments in environmental technology and information related to green lifestyles.</p>
            <p className="hero-text">Join us and let us care about the health of the earth and leave a better and greener home for future generations. Because every small change will become a powerful force, and together push us towards a sustainable future.</p>
            <button className={styles.button} onClick={() => window.location.href = '/information/city'}>
              View
            </button>
        </section>
      </header>

    </div>

  );
}

export default HomePage;
