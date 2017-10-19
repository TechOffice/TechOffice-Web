import React, {Component} from 'react';

export default class Draggable extends Component{

  constructor(props){
    super(props);
  }

  onDragStart(event){
    if (this.data){
      event.dataTransfer.setData("data", JSON.stringify(this.data));
    }
  }

  render(){
    return (
      <div draggable="true" onDragStart={this.onDragStart.bind(this)}>
        {this.desc}
      </div>
    );
  }
}
