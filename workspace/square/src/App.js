import React, {Component} from 'react';
import './App.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const sqrStyle = {
    "width": "100px",
    "height": "100px",
    "background-color": "darkred",
    "border": "1px solid black",
    "display": "inline-block"
    };
    return (<div style={sqrStyle}></div>)
  }
}

export default Square;
