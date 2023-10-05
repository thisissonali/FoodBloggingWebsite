import React from 'react'
import "../src/About.css";
import AboutPicture from "./assets/About.svg"


function About() {
  return (
    <>
      <div className="aboutBlock">
        <div className="AbtSectionBlock">
                  <h1> About Us </h1>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo natus vitae incidunt voluptatibus perferendis temporibus neque, magnam odio blanditiis facilis minima voluptatem non fuga, recusandae voluptatum magni, corrupti asperiores sunt ipsa? A assumenda mollitia ullam at aperiam natus quibusdam vitae, quisquam voluptas maxime quaerat est eligendi! Ducimus, temporibus cupiditate?
                  </p>
                  <button className='btn'>Read More</button>
        </div>
        <img className="AboutPicture" src={AboutPicture} alt="About" />
      </div>
    </>
  );
}

export default About
