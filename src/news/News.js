import React from 'react';
import './News.css';
import Fade from 'react-reveal/Fade';

function News(props) {

  return (

  <div className="Features">
  <Fade right>
    <div className="News">
        <img src ={props.img} alt="News about carbon emission"/>
        <h3>{props.title}</h3>

    </div>
    <div className="NewsContent">
        <p>{props.description}</p>
        <button onClick={() => window.location.href = props.link}>Explore ></button>
    </div>
    </Fade>
  </div>
  );
}

export default News;
