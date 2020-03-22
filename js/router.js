import React from "react";
import Home from "./screens/home";

export default class MyComponent extends React.Component {
  state = {
    text: ""
  };

  render() {
    return <Home />;
  }
}
