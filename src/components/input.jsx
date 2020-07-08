import React, { useState } from "react";
import Out from "./out";

function numb(price) {
  return { price };
}

function Inputbox() {
  const [price, setprice] = useState("");

  function number() {
    numb(price);
  }

  function changed(event) {
    var total = event.target.value;
    setprice(total);
    // console.log(total);
    numb(total);
  }

  return (
    <div>
      <input placeholder="Enter the number" type="text" onChange={changed} />
      <button onClick={number}> Done</button>
      <h3>
        You selected <Out name1={price} />
      </h3>
    </div>
  );
}

export default Inputbox;
