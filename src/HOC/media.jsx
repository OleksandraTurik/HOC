import React, { Component } from "react";
import { isMediaMatched } from "../helpers/helpers";

export default function Media(Wrapped, media, option) {
  class Media extends Component {
    state = {
      mediaMatched: false,
    };

    handleResize = () => {
      this.setState({ mediaMatched: isMediaMatched(media) });
    };

    componentDidMount() {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
      const props = { [option ?? "matchMedia"]: this.state.mediaMatched };
      return <Wrapped {...props} />;
    }
  }

  Media.displayName = `media(${
    Wrapped.displayName || Wrapped.name || "Component"
  })`;
  return Media;
}
