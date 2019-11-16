import React, { Component } from 'react';
import star1 from '../img/star.png';
import star2 from '../img/star1.png';
import star3 from '../img/bluestar2.png';
import '../style/AppStyle.css';

class StarBackground extends Component {
   constructor() {
    super();
    this.state = {
      img:{
        src:star1,
        opacity:0,
        size:"",
        margin:""
      },
    }
    this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler() {
      const imgArray = [star1, star2, star3];
      let imgSrc = imgArray[Math.floor(Math.random() * imgArray.length)];
      let imgSize = (Math.floor(Math.random() * 30)) +'px';
      let imgOpacity = Math.random();
      let imgMargin = (Math.floor(Math.random() * 80)) +'px';

      let newStar = {
        id: 1 + Math.random(),
        src: imgSrc,
        opacity: imgOpacity,
        size: imgSize,
        margin: imgMargin
      }

      this.setState({
       img: newStar,
      });
    };

    componentDidMount() {
      this.changeHandler();
      setInterval(this.changeHandler, 3000);
    };


  render() {
    var starStyle = {
      width: this.state.img.size,
      height: this.state.img.size,
      opacity: this.state.img.opacity,
      margin: this.state.img.margin,
    };

    return <img className="star" src={`./${this.state.img.src}`} style={starStyle}/>;
      }
    }

export default StarBackground;
