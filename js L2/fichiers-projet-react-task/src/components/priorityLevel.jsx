import React from 'react';
import '../assets/style/priorityLevel.css';
export default class PriorityLevel extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }
  
    render() {
      return (
        <div className={this.props.status} onClick={this.onClick} ></div>
      );
    }

    onClick(){
      this.props.priorityChange(this.props.ID,this.props.level);
    }
  }