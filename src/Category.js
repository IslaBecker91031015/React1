import React, { Component } from 'react';
import './App.css';
import  CategoryDetail from './CatDetail.js';

class Category extends Component {
    render() {
      return  this.props.category.map((cat) => (
        <CategoryDetail key={cat.id} cat={cat}/>
      ));
    }
  }

export default Category;
