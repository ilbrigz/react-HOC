import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import Title from "./components/Title";

import "./styles.css";

function WithHover(Component) {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hovering: false
      };
    }
    mouseOver = () => {
      this.setState({ hovering: true });
    };
    mouseOut = () => {
      this.setState({ hovering: false });
    };
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component hovering={this.state.hovering} />
        </div>
      );
    }
  };
}

const HoverTitle = WithHover(Title);

function App() {
  return (
    <div className="App">
      <HoverTitle />
      <Info />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
