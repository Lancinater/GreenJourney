import React from 'react';
import './News.css';

function News(props) {

  return (
    <div className="News">
        <img src ={props.img} alt="News about carbon emission"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} rel="noopener noreferrer">Explore ></a>
    </div>

  );
}

export default News;
