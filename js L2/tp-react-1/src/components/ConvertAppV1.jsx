import React from 'react';
import currencies from '../data/currencies.js';
import Currency from './Currency.jsx'
/*
 define root component
*/
export default class CurrencyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {euro:"1",currencies:currencies};
    this.myRef = React.createRef();
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  render() {
    return (
    <div >
        <input type="text" placeholder="Valeur euro.." ref={this.myRef}/>
        <button onClick={this.componentDidMount}>OK</button>
        <Currency currencies={this.state.currencies} euro={parseFloat(this.state.euro)}/>
    </div>);
  }

  async componentDidMount(){
    this.setState({euro: this.myRef.current.value ,currencies:currencies});
  }

}