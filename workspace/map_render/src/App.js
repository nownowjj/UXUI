import React, { Component } from 'react';
class Circle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var line = ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'];
    var colors = ['navy', 'green', 'orange', 'skyblue', 'purple'];

    var style = {
      "width": "100px",
      "height": "100px",
      "border-radius": "60px",
      "border": "5px solid teal",
      "text-align": "center",
      "line-height": "100px",
    }
    const lineItems = line.map((data, index) => {
      let itemStyle = { ...style };
      var border = style.border.split(" ");
      border[2] = colors[index];
      itemStyle.border = border.join(" ");
      console.log(itemStyle.border);
      return (<div style={itemStyle}>{data}</div>);
    });


    return (<div>{lineItems}</div >);
  }
}

export default Circle;
