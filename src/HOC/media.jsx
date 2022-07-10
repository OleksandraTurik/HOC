import React, { Component } from "react";
import { isMediaMatched } from "../helpers/helpers";

export default function media(Wrapped, mediaQueries, option) {
  class Media extends Component {
    state = {
      isMediaMatched: false,
    };
    mediaMatched = isMediaMatched(mediaQueries);

    handleResize = () => {
      this.setState({ isMediaMatched: this.mediaMatched.matches });
    };

    componentDidMount() {
      this.handleResize();
      this.mediaMatched.addEventListener("change", this.handleResize);
    }

    componentWillUnmount() {
      this.mediaMatched.removeEventListener("change", this.handleResize);
    }

    render() {
      const props = {
        ...this.props,
        [option ?? "matchMedia"]: this.state.isMediaMatched,
      };
      return <Wrapped {...props} />;
    }
  }

  Media.displayName = `media(${
    Wrapped.displayName || Wrapped.name || "Component"
  })`;
  return Media;
}
