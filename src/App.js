import React, { Component } from 'react';
import './style/AppStyle.css';
import StarBackground from './components/StarBackground.js';
import Modal from './components/Modal.js';
import LangList from './components/LangList.js';
import CatList from './components/CatList.js';

class App extends Component {
   constructor() {
     super();
     this.state = {
       stars:[],
       langs:[],
       category:[],
       show: false,
     };
    }

    showModal = () => {
      this.setState({ show: true });
      };
    hideModal = () => {
        this.setState({ show: false });
      };

    render() {
      const x = 25;
      const images = [];
      for(var i=0; i < x; i++) {
        images.push(<StarBackground stars={this.state.stars}/>);
      }

    return (
       <div>
       <div className="title"><h2>PORTFOLIO</h2></div>
       <div className="stars">{images}</div>

        <div className="main">
          <div className="content">
            <CatList category={this.state.category}/>
          </div>
          <div className="langs">
            <LangList langs={this.state.langs}/>
          </div>
          <Modal show={this.state.show} close={this.hideModal}>
             <div>
              <ul>
                <li>CONTACT</li>
                <li>islabecker@gmail.com</li>
              </ul>
              </div>
            </Modal>
          <footer onClick={this.showModal}>
            <p>&copy; Isla Becker</p>
          </footer>
        </div>

       </div>
      );
    }
  }
export default App;
