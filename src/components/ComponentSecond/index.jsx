import React, { Component } from "react";
import matchDevice from "../../HOC/deviceNew";

class ComponentSecond extends Component {
  render() {
    return <p>Welcome to my homework</p>;
  }
}

export default matchDevice(ComponentSecond);
