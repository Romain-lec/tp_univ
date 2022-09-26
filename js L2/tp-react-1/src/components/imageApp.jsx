import React from 'react';

import '../assets/style/murImages.css';

import dataImages from '../data/dataImages.js';
import ImageWall from './ImageWall.jsx'
import ImageDetails from './ImageDetails.jsx'
/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={image : dataImages[3].image,texte : dataImages[3].texte, filterText:''};
    this.imageChanged = this.imageChanged.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }
  render() {
    return (
      <div>
        <ImageWall images = {dataImages} change = {this.imageChanged} filterText = {this.state.filterText} />
        <ImageDetails image = {this.state.image} texte = {this.state.texte} filter = {this.filterChanged} />
      </div>
    );
  }

  imageChanged(newImage,newTexte){
    this.setState({image : newImage, texte : newTexte});
  }

  filterChanged(newFilterText){
    this.setState({filterText : newFilterText});
  }
}
