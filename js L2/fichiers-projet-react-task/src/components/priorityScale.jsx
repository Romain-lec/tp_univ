import React from 'react';
import PrioriryLevel from './priorityLevel.jsx';
import '../assets/style/priorityScale.css';

export default class PriorityScale extends React.Component {
    constructor(props) {
      super(props);
      this.state={level:1}
      this.levelChange = this.levelChange.bind(this);
      
    }
  
    render() {
      const PRIORITYLEVEL=[];
      for (let nbLevel = 1; nbLevel <= 6; nbLevel++) {
        PRIORITYLEVEL.push(<PrioriryLevel level={nbLevel} status={(nbLevel <= this.props.priority)?"level on":"level off"} priorityChange={this.props.priorityChange} ID={this.props.ID} key={nbLevel}/>)
      }
      return (
        <div className="scale">
          {PRIORITYLEVEL}
          ({this.props.priority})
        </div>
      );
    }

    levelChange(power){
      this.setState({level:power});
    }

    /*il faut faire toute les fonction dans todo car c le seule qui est toujour present*/
  }