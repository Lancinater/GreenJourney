import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} GreenJourney.</p>
      </div>
    </footer>
  );
}

export default Footer;