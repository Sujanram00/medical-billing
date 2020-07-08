import React from "react";
// import Slider from "./slider";
import Input from "./input";
function Entry(props) {
  // const state = useState(Slider.value);
  // console.log(state)

  return (
    <div className="term">
      {/* <Slider /> */}
      <Input />
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.name}
        </span>
        <span>{props.price}</span>
      </dt>
      <dd>{props.stock}</dd>
    </div>
  );
}

export default Entry;
