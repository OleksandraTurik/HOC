import React, { Component } from "react";
import media from "../../HOC/media";

class ComponentFirst extends Component {
  render() {
    return <h1>Hello, user</h1>;
  }
}

export default media(ComponentFirst, "(min-width: 624px)", "isMediaMatched");
