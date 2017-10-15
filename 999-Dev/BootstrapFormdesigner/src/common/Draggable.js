import React, {Component} from 'react';

export default class Draggable extends Component{

  constructor(props){
    super(props);
    this.tag = "div";
  }

  onDragStart(event){
    var children = this.props.children;
    event.dataTransfer.setData("data", children);
  }

  render(){
    return (
      <div draggable="true" onDragStart={this.onDragStart.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}
