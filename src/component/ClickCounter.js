import React from "react";
import WithHoc from "./withHoc";

function ClickCounter(props) {
  return (
    <div>
      <button type="button" onClick={props.HandleCount}>
        Click {props.count} times
      </button>
    </div>
  );
}

export default WithHoc(ClickCounter);
