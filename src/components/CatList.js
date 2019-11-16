import React, { Component } from 'react';
import '../style/AppStyle.css';
import Category from '../components/Category.js';

import web from '../img/ocean1.png';
import web1 from '../img/web1.png';
import web2 from '../img/web1.jpg';
import micro from '../img/microservices.jpg';
import jenkins from '../img/jenkins.jpg';
import coffee from '../img/coffee.jpg';
import acquafly from '../img/acquafly.jpg';
import healthcare from '../img/healthcare.jpg';
import becker1 from '../img/becker1.jpg';
import app from '../img/app.png';
import app2 from '../img/webapp2.jpg';
import app3 from '../img/app3.png';
import app4 from '../img/app4.jpg';
import game1 from '../img/game4.png';
import game from '../img/game1.png';

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
            {id:1, type:"web", details:"Becker & Co Law Firm", img1:becker1, url:"https://becker.co.nz"},
            {id:2, type:"web", details:"Message In A Bottle", img1:web, url:"https://oceanmess.com"},
            {id:3, type:"web", details: "AcquaFly", img1:acquafly, url:"https://islabecker91031015.github.io/AcquaFly/"},
            {id:4, type:"web", details:"Coffee Site", img1:coffee, url:"https://islabecker91031015.github.io/AgileProjectCoffeeSite/"},
            {id:6, type:"web", details:"Jenkins", img1:jenkins, url:"https://islabecker91031015.github.io/Jenkins/"},
            {id:7, type:"web", details:"Microservices", img1:micro, url:"https://islabecker91031015.github.io/MicroservicesSite/"},
            {id:8, type:"web", details: "Healthcare One", img1:healthcare, url:"https://islabecker91031015.github.io/Healthcare-Site---JS-React-HTML-CSS/"},
          ]
        },
        {
          id:2,
          title: "APPLICATIONS",
          img: app,
          info: [
            {id:1, type:"app", details: "Menu App", img1:app2},
            {id:2, type:"app", details:"A Message In A Bottle", img1:app4},
          ]
        },
        {
          id:3,
          title: "GAMES",
          img: game1,
          info: [{id:1, type:"game", details:"Luminescence", img1:game}]
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
