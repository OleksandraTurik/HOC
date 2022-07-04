import React, { Component } from 'react';
import Device from '../../HOC/device';

class ComponentSecond extends Component {
  render() {
    return <p>Hello</p>;
  };
};

export default Device(ComponentSecond, '(max-width: 600px)', 'matchMedia');