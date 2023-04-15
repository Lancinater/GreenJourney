import React from 'react';
import './News.css';

function News(props) {

  return (

  <div className="Features">
    <div className="News">
        <img src ={props.img} alt="News about carbon emission"/>
        <h3>{props.title}</h3>

    </div>
    <div className="NewsContent">
        <p>{props.description}</p>
        <button href={props.link} rel="noopener noreferrer">Explore ></button>
    </div>
  </div>
  );
}

export default News;
