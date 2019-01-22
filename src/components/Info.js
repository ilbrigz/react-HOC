import React from "react";

export default props => (
  <p
    style={{
      color: props.hovering ? "blue" : "",
      fontSize: props.fontSize ? props.fontSize : ""
    }}
  >
    This is the info. Just a basic react function
  </p>
);
