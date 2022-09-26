import React from 'react';
import '../assets/style/doneButton.css';

export default class DoneButton extends React.Component {
    constructor(props) {
      super(props);
      this.handClisk = this.handClisk.bind(this);
    }
  
    render() {
      return (
        <div className="doneButton" onClick={this.handClisk}>✓</div>
      );
    }
    handClisk(){
      this.props.taskDone(this.props.ID);
    }
  }