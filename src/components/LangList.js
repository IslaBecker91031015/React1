import React, { Component } from 'react';
import '../style/AppStyle.css';
import Lang from '../components/Lang.js';

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
          id:7,
          language: "Python"
        },
        {
          id:8,
          language: "SQL"
        },
        {
          id:6,
          language: "C#"
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
