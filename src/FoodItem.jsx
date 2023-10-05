import React from "react";
import "../src/Fooditems.css";

function FoodItem(props) {
  return (
    <div className="FoodItem">
      <img src={props.img} />
      <span className="namee">{props.name}</span>
      <p className="paratext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia
        doloribus rerum vitae porro at consequuntur nesciunt reprehenderit,
        ducimus sit.
      </p>
      <button className="btnss">Read More</button>
    </div>
  );
}

export default FoodItem;
