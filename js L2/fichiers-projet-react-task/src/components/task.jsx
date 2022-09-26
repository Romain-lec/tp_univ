import React from 'react';
import PriorityScale from './priorityScale.jsx';
import DoneButton from './DoneButton.jsx';
import '../assets/style/task.css';

export default class Task extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="task">
          {this.props.taskName}({this.props.taskTime}mn) 
          <PriorityScale priorityChange={this.props.priorityChange} priority={this.props.priority} ID={this.props.ID}/>
          <DoneButton taskDone={this.props.taskDone} ID={this.props.ID}/>
        </div>
      );
    }
  }