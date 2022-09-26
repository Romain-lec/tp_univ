import React from 'react';
export default class ImageDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {filterValue: ''};
        this.filterValueChanged = this.filterValueChanged.bind(this);
    }
    render(){ 
        return (
        <div id='details'>
            <input id='filter' type="text" placeholder="filtre image..." onChange={this.filterValueChanged} value={this.state.filterValue}></input>
            <img src={this.props.image} alt={this.props.texte}/>
            <div className='legende'>{this.props.texte}</div>
        </div>);
    }

    filterValueChanged(event){
        this.setState({filterValue:event.target.value});
        this.props.filter(event.target.value);
    }
}