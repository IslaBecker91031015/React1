import React, { Component } from 'react';
import './App.css';

import web from './img/ocean1.png';
import web1 from './img/web1.png';
import web2 from './img/web1.jpg';
import micro from './img/microservices.jpg';
import jenkins from './img/jenkins.jpg';
import coffee from './img/coffee.jpg';
import acquafly from './img/acquafly.jpg';
import healthcare from './img/healthcare.jpg';
import becker1 from './img/becker1.jpg';

import app from './img/app.png';
import app2 from './img/webapp2.jpg';
import app3 from './img/app3.png';
import app4 from './img/app4.jpg';

import game1 from './img/game4.png';
import game from './img/game1.png';

import Category from './Category.js';

class CatList extends Component {
  constructor() {
    super();
      this.state = {
      category: [
        {
          id:1,
          title: "WEBSITES",
          img: web2,
          info: [
            {id:1, details:"Becker & Co Law Firm", img1:becker1},
            {id:2, details:"A Message In A Bottle", img1:web},
            {id:3, details: "AcquaFly", img1:acquafly},
            {id:4, details:"Coffee Site", img1:coffee},
            {id:6, details:"Jenkins", img1:jenkins},
            {id:7, details:"Microservices", img1:micro},
            {id:8, details: "Healthcare One", img1:healthcare},
          ]
        },
        {
          id:2,
          title: "APPLICATIONS",
          img: app,
          info: [
            {id:1, details: "Menu App", img1:app2},
            {id:2, details:"A Message In A Bottle", img1:app4},
          ]
        },
        {
          id:3,
          title: "GAMES",
          img: game1,
          info: [{id:1, details:"Luminescence", img1:game}]
        },
      ]
    };
  }

  render() {
  return (
     <div>
      <Category category={this.state.category}/>
     </div>
    );
  }

}


export default CatList;