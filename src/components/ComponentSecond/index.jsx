import React, { Component } from 'react';
import Device from '../../HOC/device';

class ComponentSecond extends Component {
  render() {
    return <p>Welcome to my homework</p>;
  };
};

export default Device(ComponentSecond, '(min-width: 624px)', 'isMediaMatched');