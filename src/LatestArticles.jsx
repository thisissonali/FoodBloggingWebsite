import React from 'react'
import FoodItem from './FoodItem'
import grilledtomatoes from "./assets/grilledtomatoes.svg"
import brocolicheesesoup from "./assets/brocolicheesesoup.svg"
import crunchwrapsupreme from "./assets/crunchwrapsupreme.svg"
import grillcorn from "./assets/grillcorn.svg"
import snackfortravel from "./assets/snackfortravel.svg"
import postworkoutrecipes from "./assets/postworkoutrecipes.svg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/LatestArticles.css";

function LatestArticles() {
     const settings = {
       slidesToShow: 3, // Number of slides to show at once
       slidesToScroll: 3, // Number of slides to scroll at once
       prevArrow: <CustomPrevArrow />, // Custom left arrow component
       nextArrow: <CustomNextArrow />, // Custom right arrow component
     };

     function CustomPrevArrow(props) {
       const { onClick } = props;
       return (
         <div className="custom-arrow custom-prev" onClick={onClick}>
           &lt; {/* Left arrow symbol */}
         </div>
       );
     }

     function CustomNextArrow(props) {
       const { onClick } = props;
       return (
         <div className="custom-arrow custom-next" onClick={onClick}>
           &gt; {/* Right arrow symbol */}
         </div>
       );
     }
  return (
    <div>
      <h1 className="Headinggg">Latest Articles</h1>
      <div className="fooditemscont">
        <Slider {...settings}>
          <FoodItem name={"Grilled Tomatoes at Home"} img={grilledtomatoes} />
          <FoodItem name={"Snacks for Travel"} img={snackfortravel} />
          <FoodItem name={"Post-workout Recipes"} img={postworkoutrecipes} />
          <FoodItem name={"How To Grill Corn"} img={grillcorn} />
          <FoodItem name={"Crunchwrap Supreme"} img={crunchwrapsupreme} />
          <FoodItem name={"Broccoli Cheese Soup"} img={brocolicheesesoup} />
        </Slider>
      </div>
    </div>
  );
}

export default LatestArticles
