import React from 'react';

import '../assets/style/taskApp.css';
import AddTask from './addTask.jsx';
import Done from './done.jsx';
import ToDo from './toDo.jsx';
import tasks from '../data/tasksData.js';

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.taskDone = this.taskDone.bind(this);
    this.addTask = this.addTask.bind(this);
    this.setNewTask = this.setNewTask.bind(this);
    this.makeTodo = this.makeTodo.bind(this);
    this.priorityChange = this.priorityChange.bind(this);
    this.state={todo:tasks.map(elt => this.makeTodo(elt.description,elt.duration,elt.id)),done:[]}
  }
  render() {
    return (
      <div className="taskApp">
        <AddTask addTask={this.addTask}/>
        <ToDo tasks={this.state.todo} taskDone={this.taskDone} priorityChange={this.priorityChange}/>
        <Done  doneTask={this.state.done} nbDoneTask={this.state.done.length}/>
      </div>
    );
  }

  taskDone(ID){
    let res = this.state.todo.filter(elt => elt.id==ID).pop();
    this.state.done.push(res)
    this.setState({todo:this.state.todo.filter(elt => elt.id!=ID),done:this.state.done});
  }

  addTask(name,time,ID){
    this.setState({todo:this.setNewTask(name,time,ID) })
  }

  setNewTask(name,time,ID){
    let res=this.state.todo.map(elt => elt);
    res.push({
      id : `T${ID}`,
      description : name,
      duration : time,
      priority : 1
    });
    return res;
  }

  makeTodo(desc,dura,ID){
    return {description : desc, duration : dura,id : ID, priority : 1};
  }

  priorityChange(ID,level){
    let res;
    let result = this.state.todo.map(elt => elt)
    result.forEach((elt,index) => (elt.id==ID)?res = index:null);
    result[res]["priority"] = level;
    this.setState({todo : result});
  }
}
