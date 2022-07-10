import React, { Component } from "react";
import { isMediaMatched, queries } from "../helpers/helpers";

const device = (WrappedComponent) => {
  class Device extends Component {
    state = {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isPrinting: false,
    };

    handleChangeDevice = () => {
      this.setState({
        isMobile: isMediaMatched(queries.mobile),
        isTablet: isMediaMatched(queries.tablet),
        isDesktop: isMediaMatched(queries.desktop),
        isPrinting: isMediaMatched(queries.printing),
      });
    };

    componentDidMount() {
      this.handleChangeDevice();
      window.addEventListener("resize", this.handleChangeDevice);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleChangeDevice);
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  Device.displayName = `device(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;
  return Device;
};

export default device;
