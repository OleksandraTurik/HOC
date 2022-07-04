import React, { Component } from 'react';
import Media from '../../HOC/media';

class ComponentFirst extends Component {
  render() {
    return <h1>Hello</h1>;
  };
};

export default Media(ComponentFirst, '(max-width: 600px)', 'matchMedia');