import React from 'react';
export default class ImageWall extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const imgComponents = this.props.images.filter(elt => elt.texte.includes(this.props.filterText.toLowerCase())).map( image => <img src={image.image} alt={image.texte} title={image.texte} onMouseOver={()=>this.props.change(image.image,image.texte)} key = { image.image } /> );
        return <div id='mur'>{imgComponents}</div>;
    }
}