import React, { Component } from 'react';
import './App.css';

export class LangDetail extends Component {
  constructor() {
    super();
    this.state = {
    hover: false,
    }
    this.hover = this.hover.bind(this);
  }

  hover() {
  	this.setState({
      hover: !this.state.hover})
  }
      render() {
       var hoverText;
       if (this.state.hover) {
         hoverText = {color: 'white'}
       } else {
         hoverText = {color: '#a3bec4'}
       }

      return  (
        <h2 onMouseEnter={this.hover} onMouseLeave={this.hover} style={hoverText}> {this.props.lang.language}</h2>
      );
    }
  }

export default LangDetail;
