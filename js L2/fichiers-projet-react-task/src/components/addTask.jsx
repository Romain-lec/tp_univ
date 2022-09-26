import React from 'react';
import '../assets/style/addtask.css';

export default class AddTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = {id: 5};
      this.nextID = this.nextID.bind(this);
      this.handclick = this.handclick.bind(this);
      this.nameRef = React.createRef();
      this.timeRef = React.createRef();
    }
  
    render() {
      return (
        <div className="addTask">
          <input type="text" placeholder="Task name ?" ref={this.nameRef} /> <input type="number" placeholder="10" ref={this.timeRef} />mn<button onClick={this.handclick}>add</button>
        </div>
      );
    }

    nextID(){
      let res = this.state.id;
      this.setState({id:this.state.id++});
      return res;
    }

    handclick(){
      this.props.addTask(this.nameRef.current.value,parseInt(this.timeRef.current.value),this.nextID());
      this.nameRef.current.value="";
      this.timeRef.current.value="";
    }
  }