import React from "react";

const Title = props => (
  <h1 style={{ color: props.hovering ? "red" : "" }}>The title</h1>
);

export default Title;
