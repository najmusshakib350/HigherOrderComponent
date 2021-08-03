import React from "react";
import WithHoc from "./withHoc";

function HoverCounter(props) {
  return (
    <div>
      <button type="button" onMouseOver={props.HandleCount}>
        Hover {props.count} times
      </button>
    </div>
  );
}

export default WithHoc(HoverCounter);
