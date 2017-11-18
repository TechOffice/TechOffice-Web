import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class DraggableDroppable extends Component{

  constructor(props){
    super(props);
	this.state = {control: this.control};
  }

  onDragStart(event){
    if (this.control){
      DragDropManager.getInstance().setDraggable({type:"div"});
    }
  }
  
  getParent(){
	  var parent = this.props.getParent();
  }

  render(){
    return (<this.state.control.type {...this.state.control.props}/>);
  }
}
