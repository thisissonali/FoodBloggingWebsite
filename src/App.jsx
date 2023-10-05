import React from "react";
import "../src/App.css";
import websitelogo from "./assets/websitelogo.svg";
import pizzaPhoto from "./assets/pizzaPhoto.svg";
import pizzaPhotoBorder from "./assets/pizzaPhotoBorder.svg";
import About from "./About";
import LatestArticles from "./LatestArticles";
import Footer from "./Footer";
function App() {
  return (
    <>
      <img className="websitelogo" src={websitelogo} alt="websitelogo" />

      <div className="combinePizza">
        <button className="getInTouchBtn">Get in touch</button>
        <img className="pizzaPhoto" src={pizzaPhoto} alt="pizzaPhoto" />
        <img
          className="pizzaPhotoBorder"
          src={pizzaPhotoBorder}
          alt="pizzaPhotoBorder"
        />
      </div>
      <div className="HeadinggBox">
        <h1 className="Headingg">
          Discover the <span style={{ color: "#E23744" }}>Best</span> Food and
          Drinks
        </h1>
      </div>
      <p className="paratexts">
        Naturally made Healthcare Products for the better care & support of your
        body.
      </p>
      
      <About />

      <LatestArticles />

      <Footer />
    </>
  );
}

export default App;
