import React from "react";
// import Slider from "./slider";
import Out from "./out";
import Numb from "./input";

function billing() {
  function final() {
    console.log(<Numb />);
  }
  return (
    <div id="billing">
      <h2>billing</h2>
      <h3>
        Total
        <Out />
      </h3>
      <button onClick={final}>Show</button>
      <p> </p>
    </div>
  );
}

export default billing;
