import React, { Component } from 'react';
import './App.css';
import Lang from './Lang.js';

class LangList extends Component {
  constructor() {
    super();
      this.state = {
      langs: [
        {
          id:1,
          language: "HTML"
        },
        {
          id:2,
          language: "CSS"
        },
        {
          id:3,
          language: "JS"
        },
        {
          id:4,
          language: "React"
        },
        {
          id:5,
          language: "Java"
        },
        {
          id:6,
          language: "C#"
        },
        {
          id:7,
          language: "Python"
        },
        {
          id:8,
          language: "SQL"
        }
      ]
    };
  }

  render() {
  return (
     <div>
      <Lang langs={this.state.langs}/>
     </div>
    );
  }

}


export default LangList;
