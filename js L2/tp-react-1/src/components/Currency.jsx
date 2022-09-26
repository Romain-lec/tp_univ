import React from 'react';

/*
 define root component
*/
export default class Currency extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const curComponents = this.props.currencies.map(elt => <div key={elt.code}><div>{this.props.euro*elt.rate}{elt.symbol}</div></div> );
    return <div>{curComponents}</div>;
  }
}