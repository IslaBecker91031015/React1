import React, { Component } from 'react';
import './App.css';
//import StarDetail from './StarDetail.js';
import PropTypes from 'prop-types';

class Star extends Component {
    render() {

      render() {
        var starStyle = {
          width: this.props.star.size,
          height: this.props.star.size,
          opacity: this.props.star.opacity,
        };

      return  (
          <img className="star" src={`./${this.props.star.src}`} style={starStyle} />
      );
  }


export default Star;
