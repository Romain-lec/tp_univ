import React from 'react';
import DoneTask from './doneTask.jsx';
import '../assets/style/tasklist.css';

export default class Done extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {hiden:false}
      this.displayDoneTask = this.displayDoneTask.bind(this);
    }
  
    render() {
      const doneTask = this.props.doneTask.map(elt => <DoneTask taskName={elt.description} taskTime={elt.duration} priority={elt.priority} key={elt.id}/>);
      return (
        <div className="tasklist">
          <h3>Tâches terminées</h3><button onClick={this.displayDoneTask}>{(this.state.hiden)?"-":`+(${this.props.nbDoneTask})`}</button>
          {(this.state.hiden)?doneTask:null}
        </div>
      );
    }

    displayDoneTask(){
      (this.state.hiden)?this.setState({hiden:false}):this.setState({hiden:true});
    }
  }

  