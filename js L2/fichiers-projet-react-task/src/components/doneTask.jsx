import React from 'react';
import '../assets/style/task.css';

export default class DoneTask extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="task">
            {this.props.taskName}({this.props.taskTime}mn) (priorité : {this.props.priority})
        </div>
      );
    }
  }