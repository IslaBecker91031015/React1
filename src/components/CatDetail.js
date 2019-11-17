import React, { Component } from 'react';
import '../style/AppStyle.css';
import Modal from '../components/Modal.js';
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
      // get selected info, change image size app/web
      const list = this.props.cat.info.map((info) =>(
        (info.type == "app") ?
        <div key={info.id}>
        <h3>{info.details}</h3>
        <a target="blank" href={info.url}>
        <img className="details2" src={info.img1}></img></a>
        <p>{info.about}</p>
        </div>
      : (
        <div key={info.id}>
        <h3>{info.details}</h3>
        <a target="blank" href={info.url}>
        <img className="details" src={info.img1}></img></a>
        <p>{info.about}</p>
        </div>
      )
        ));
      return  (
        <div>
          <Modal show={this.state.show} close={this.hideModal}>
            <ul>{list}</ul>
          </Modal>
          <div className="boxes">
           <h2 onClick={this.showModal} >{this.props.cat.title}</h2>
           <img className="cat" onClick={this.showModal} src={this.props.cat.img}></img>
          </div>
        </div>
      );
    }
  }

export default CatDetail;
