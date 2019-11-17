import React, { Component, useRef, useEffect } from 'react';
import './style/AppStyle.css';
import StarBackground from './components/StarBackground.js';
import Modal from './components/Modal.js';
import LangList from './components/LangList.js';
import CatList from './components/CatList.js';

import imgAbout from './img/imgAbout.jpg';

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

    categoriesShow = () => {
      this.setState({ catShow: true });
      };

    render() {
      const x = 25;
      const images = [];
      for(var i=0; i < x; i++) {
        images.push(<StarBackground stars={this.state.stars}/>);
      }
      const ref = React.createRef();
      const ref2 = React.createRef();

      //nav scroll refs
      const handleClick = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        const handleClick2 = () =>
        ref2.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });



    return (
       <div>
        {/* Fixed Star background */}
       <div className="stars">{images}</div>
        
        <div className="main">
         <header>
            {/* Right Side title */}
          <div className="title"><h2>ISLA DEVELOPER ></h2></div>
          <ul className="home">
            <li>Dynamic</li>
            <li>Interactive</li>
            <li>Responsive</li>
         </ul>
            
           {/* Left Side Nav bar */}
          <nav> 
              <ul>
                <li onClick={handleClick}><span>Portfolio</span></li>
                <li onClick={handleClick2}><span>About</span></li>
              </ul>
            </nav>
         </header>
      
          
        {/* Web, App, Game img boxes */}
          <div ref={ref} className="content">
            <CatList category={this.state.category} />
          </div>

          {/* Languages List */}
          <div className="langs">
            <h2>Languages</h2>
            <LangList langs={this.state.langs}/>
          </div>

          {/* About */}
          <div ref={ref2} className="about">
            <h2>About</h2>
            <img src={imgAbout}/>
            <p>I am a software developer and designer from Wellington, New Zealand.</p>
            <p>I design and code online experiences including websites, applications and games,
               with integration of content management systems, security, accessibility, user accounts, SEO, social media, cloud databases and more.</p>
            <p>My background includes completing Level 6 Diploma of Software Development and Bachelor of Design (Hons).</p>
            
            
            <button className="button1" onClick={this.showModal}>Get In Touch</button>
          </div>

            {/* Contact Info */}
            <Modal show={this.state.show} close={this.hideModal}>
             <div className="contact">
              <ul>
                <h2>Contact</h2>
                <li>islabecker@gmail.com</li>
                <a href="https://github.com/IslaBecker91031015"><li>GitHub</li></a>
                <a href="https://www.linkedin.com/in/isla-becker-10199359/"><li>LinkedIn</li></a>
              </ul>
              </div>
            </Modal>

        </div>

       </div>
      );
    }
  }
export default App;
