import React from 'react';
import Task from './task.jsx';
import tasks from "../data/tasksData.js";

export default class ToDO extends React.Component {
    constructor(props) {
      super(props);
      this.state={filter:""}
      this.filterChange = this.filterChange.bind(this);
    }
  
    render() {
      const tasksComponents = this.props.tasks.filter(elt => elt.description.includes(this.state.filter.toLowerCase())).map( elt => <Task taskName={elt.description} taskTime={elt.duration} priority={elt.priority} ID={elt.id} key={elt.id} priorityChange={this.props.priorityChange} taskDone={this.props.taskDone}/> )
      return (
        <div className="tasklist">
          <h3>Tâches en cours</h3>
          <input type="text" placeholder='filtre' id='filter' onChange={this.filterChange} value={this.state.filter}/>
          <p>il y a {tasksComponents.length} tâche(s) en cour. Pour une durée de {tasksComponents.reduce((back,now) => back+now.props.taskTime,0)} mn.</p>
          {tasksComponents}
        </div>
      );
    }

    filterChange(event){
      this.setState({filter:event.target.value});
    }
  }



