import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class Droppable extends Component{

  constructor(props){
    super(props);
    this.childrenSeq = 0;
    this.childrens = [];
    this.state = {childrens: this.childrens};
	this.seq = 0;
  }
  
  getSeq(){
	this.seq = this.seq + 1;
	return this.seq;
  }
  
  allowDrop(event){
    event.preventDefault();
  }

  onDrop(event){
    event.stopPropagation();
    event.preventDefault()
    var draggable = DragDropManager.getInstance().getDraggable();
	
	this.childrens.push(clonedElement);
    this.setState({childrens: this.childrens});
  }

  render(){
    return (
      <div style={{height: this.height, width: this.width}}
        onDragOver={this.allowDrop.bind(this)} onDrop={this.onDrop.bind(this)} {...this.props}>
        {this.state.childrens}
      </div>
    );
  }

}
