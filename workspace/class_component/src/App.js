import React from 'react';

class RoundButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const btnStyle = {
      "width": "100px",
      "height": "40px",
      "border-radius": "10px",
      "background-color": "yellowgreen"
    };
    return (<button style={btnStyle}
      onClick={this.eventFunction.bind(this)} id={this.props.id}>{this.props.children} - {this.props.id}</button>);
  }
  eventFunction() {
   alert(this.props.id + " Click Event")
  }
}

export default RoundButton;


//bind 
// = () => or bind(this)