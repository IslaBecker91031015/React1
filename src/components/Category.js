import React, { Component } from 'react';
import '../style/AppStyle.css';
import  CategoryDetail from '../components/CatDetail.js';

class Category extends Component {
    render() {
      return  this.props.category.map((cat) => (
        <CategoryDetail key={cat.id} cat={cat}/>
      ));
    }
  }

export default Category;
