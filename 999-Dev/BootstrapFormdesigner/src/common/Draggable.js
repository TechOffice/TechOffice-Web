import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class Draggable extends Component{

  constructor(props){
    super(props);
  }

  onDragStart(event){
    if (this.data){
      event.dataTransfer.setData("data", JSON.stringify(this.data));
      DragDropManager.getInstance().setDraggable(this);
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
