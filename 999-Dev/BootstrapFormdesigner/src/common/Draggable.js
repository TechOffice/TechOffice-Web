import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class Draggable extends Component{

  constructor(props){
    super(props);
	this.control = (
	  <div draggable="true" onDragStart={this.onDragStart.bind(this)}>
        testing
      </div>
	);
	this.state = {control: this.control};
  }

  onDragStart(event){
    if (this.control){
      DragDropManager.getInstance().setDraggable({type:"div"});
    }
  }

  render(){
    return (this.control);
  }
}
