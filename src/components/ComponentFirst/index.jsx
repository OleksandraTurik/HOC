import React, { Component } from 'react';
import Media from '../../HOC/media';

class ComponentFirst extends Component {
  render() {
    return <h1>Hello, user</h1>;
  };
};

export default Media(ComponentFirst, '(min-width: 624px)', 'isMediaMatched');