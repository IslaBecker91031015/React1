import React, { Component } from 'react';
import '../style/AppStyle.css';
import  LangDetail from '../components/LangDetail.js';
import PropTypes from 'prop-types';

class Lang extends Component {
    render() {
      return  this.props.langs.map((lang) => (
           <LangDetail key={lang.id} lang={lang}/>
      ));
  }
}

Lang.propTypes = {
  langs: PropTypes.array.isRequired
}
export default Lang;
