import './NavigationBar.css';
import React from 'react';
import icon from "../pages/icon.jpg";
import { useState } from 'react';

function NavigationBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isClickedFolds, setIsClickedFolds] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  function handleClick(e) {
    setCurrentUrl(e.target.pathname);
  }

  function handleDropdownToggle() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
//    <nav>
//      {/* <img src={icon}/> */}
//      <h1>Green Journey</h1>
//      <div>
//      <ul>
//        <li>
//          <a href="/">Home</a>
//        </li>
//        <li>
//          <a href="/footprint">Footprint</a>
//        </li>
//
//
//
//
//        {/* <li>
//          <a href="/quiz">Quiz</a>
//        </li>  */}
//
//        <li>
//          <a href="/travel">Travel</a>
//        </li>
//
//         {/* <li>
//          <a href="/test">Test</a>
//        </li>  */}
//
//        <li className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
//          <a>Information</a>
//          <ul className={isDropdownVisible ? "visible" : "hidden"}>
//            <li><a href="/information/state">State Information</a></li>
//            <li><a href="/information/transport">Transport Information</a></li>
//          </ul>
//        </li>
//      </ul>
//      </div>
//
//      <div id="mobile" onClick = {handleClickFolds}>
//        <i className={isClickedFolds? "fas fa-times":"fas fa-bars"}></i>
//      </div>
//    </nav>
<div className="Navbar">
<div className="leftSide">
  <h1>Green Journey</h1>
</div>
<div className="rightSide">
  <ul>
    <li>
      <a
        href="/"
        className={currentUrl === "/" ? "active" : ""}
        onClick={handleClick}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/footprint"
        className={currentUrl === "/footprint" ? "active" : ""}
        onClick={handleClick}
      >
        Footprint
      </a>
    </li>
    <li>
      <a
        href="/travel"
        className={currentUrl === "/travel" ? "active" : ""}
        onClick={handleClick}
      >
        Travel
      </a>
    </li>


    <li>
      <a
        href="/test"
        className={currentUrl === "/test" ? "active" : ""}
        onClick={handleClick}
      >
        Test
      </a>
    </li>


    <li>
      <a
        href="/education"
        className={currentUrl === "/education" ? "active" : ""}
        onClick={handleClick}
      >
        Education
      </a>
    </li>
    <li className="dropdown">
      <a>Information</a>
      <ul className={isDropdownVisible ? "visible" : "hidden"}>
        <li>
          <a href="/information/state">State Information</a>
        </li>
        <li>
          <a href="/information/transport">Transport Information</a>
        </li>
      </ul>
    </li>
  </ul>
  <div id="mobile" onClick={() => setIsClickedFolds(!isClickedFolds)}>
    <i className={isClickedFolds ? "fas fa-times" : "fas fa-bars"}></i>
  </div>
</div>
</div>
    );
}

export default NavigationBar;