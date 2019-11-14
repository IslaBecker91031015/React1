import React, { Component } from 'react';
import './App.css';
import Modal from './Modal.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export class CatDetail extends Component {
    constructor() {
      super();
      this.state = {
      show: false,
      }
    }
    showModal = () => {
    this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

    render() {
      const list = this.props.cat.info.map((info) =>(

            <div key={info.id}>
            <li>{info.details}</li>
            <a target="blank" href={info.url}>
            <img className="details" src={info.img1}></img></a>
            </div>


          ));

      return  (

        <div>
          <Modal show={this.state.show} close={this.hideModal} >
          <ul>{list}</ul>
         </Modal>
        <div className="boxes">
          <h2>{this.props.cat.title}</h2>
           <img className="cat" onClick={this.showModal} src={this.props.cat.img}></img>
        </div>
        </div>
      );
    }
  }

export default CatDetail;
