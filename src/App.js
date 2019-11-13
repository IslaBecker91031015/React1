import React, { Component } from 'react';
import './App.css';

import StarBackground from './StarBackground.js';
import LangList from './LangList.js';
import CatList from './CatList.js';

class App extends Component {
   constructor() {
     super();
     this.state = {
       stars:[],
       langs:[],
       category:[]
     };
    }

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

          <footer>
            <p>&copy; Isla Becker</p>
          </footer>
        </div>

       </div>
      );
    }
  }
export default App;
