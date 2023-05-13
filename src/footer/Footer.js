import React from "react";
import '../assets/css/style.css';

export default function Footer() {

    return (
        <footer
    id="footer"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-duration={500}
    >
    <div className="footer-top">
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li>
                <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                </li>
                <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                
                
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Functions</h4>
            <ul>
                <li>
                <i className="bx bx-chevron-right" /> <a href="/footprint">Footprint</a>
                </li>
                <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/travel">Travel</a>
                </li>
                <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/track">Track</a>
                </li>
                <li>
                <i className="bx bx-chevron-right" /> <a href="/education">Education</a>
                </li>
                
            </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
                xxx xxx Street <br />
                xxx xxx, xx xxxxxx
                <br />
                Australia <br />
                <br />
                <strong>Phone:</strong> +61 xxxx xxxxxx
                <br />
                <strong>Email:</strong> info@example.com
                <br />
            </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
            <h3>About GreenJourney</h3>
            <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
                terra videa magna derita valies darta donna mare fermentum iaculis
                eu non diam phasellus.
            </p>
            
            </div>
        </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
        © Copyright{" "}
        <strong>
            <span>GreenJourney</span>
        </strong>
        
        </div>
        
    </div>
</footer>


    );
}