import React, { Component } from 'react';
import '../style/AppStyle.css';
import Category from '../components/Category.js';

import web from '../img/ocean1.jpg';
import wave from '../img/wave2.jpg';
import web2 from '../img/web1.jpg';
import micro from '../img/microservices.jpg';
import jenkins from '../img/jenkins.jpg';
import coffee from '../img/coffee.jpg';
import acquafly from '../img/acquafly.jpg';
import healthcare from '../img/healthcare.jpg';
import becker1 from '../img/becker1.jpg';
import app from '../img/app.png';
import app2 from '../img/webapp2.jpg';
import app4 from '../img/appocean1.jpg';
import game1 from '../img/game4.png';
import game from '../img/game1.png';
import portfolio from '../img/portfolio.jpg';

class CatList extends Component {
  constructor() {
    super();
      this.state = {
      category: [
        {
          id:1,
          title: "WEB DEVELOPMENT",
          img: web2,
          info: [
            {id:1, type:"web", details:"Becker & Co Law Firm", img1:becker1, url:"https://becker.co.nz", about:"CSS, JS, HTML, Python, Django CMS, Divio, Docker"},
            {id:2, type:"web", details:"Message In A Bottle", img1:web, url:"https://oceanmess.com", about:"Python, CSS, JS, jQuery, HTML, Google API, OAuth2, Django, Django REST, Divio, Docker"},
            {id:3, type:"web", details: "AcquaFly", img1:acquafly, url:"https://islabecker91031015.github.io/AcquaFly/", about:"CSS, JS, jQuery, HTML"},
            {id:4, type:"web", details:"Coffee Site", img1:coffee, url:"https://islabecker91031015.github.io/AgileProjectCoffeeSite/", about:"CSS, JS, jQuery, HTML, JS Session Storage"},
            {id:6, type:"web", details:"Jenkins", img1:jenkins, url:"https://islabecker91031015.github.io/Jenkins/", about:"CSS, JS, jQuery, HTML, Jenkins"},
            {id:7, type:"web", details:"Microservices", img1:micro, url:"https://islabecker91031015.github.io/MicroservicesSite/", about:"JS, jQuery, CSS, HTML"},
            {id:8, type:"web", details: "Healthcare One", img1:healthcare, url:"https://islabecker91031015.github.io/Healthcare-Site---JS-React-HTML-CSS/", about:"React, CSS, JS, jQuery, HTML"},
            {id:9, type:"web", details: "Portfolio", img1:portfolio, url:"", about:"This Site: React, HTML, CSS, Sass, JS "},
          ]
        },
        {
          id:2,
          title: "APPS",
          img: wave,
          info: [
            {id:1, type:"app", details: "Menu App", img1:app2},
            {id:2, type:"app", details:"A Message In A Bottle", img1:app4},
          ]
        },
        {
          id:3,
          title: "GAMES",
          img: game1,
          info: [{id:1, type:"game", details:"Luminescence", img1:game, about:"3 Level 3D Game developed in Unity with C#"}]
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
