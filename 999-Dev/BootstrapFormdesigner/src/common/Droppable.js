import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class Droppable extends Component{

  constructor(props){
    super(props);
    this.childrens = [];
    this.state = {childrens: this.childrens};
	this.seq = 0;
  }
  
  getSeq(){
	this.seq++;
	return seq;
  }
  
  allowDrop(event){
    event.preventDefault();
  }

  onDrop(event){
    event.stopPropagation();
    event.preventDefault()
    var draggable = DragDropManager.getInstance().getDraggable();
	this.childrens.push(draggable);
    this.setState({childrens: this.childrens});
  }

  render(){
	var me = this;
    return (
      <div style={{height: this.height, width: this.width}}
        onDragOver={this.allowDrop.bind(this)} onDrop={this.onDrop.bind(this)} {...this.props}>
		{
			this.state.childrens.map(function(children, index){
				return <children.type key={index}/>
			})
		}
      </div>
    );
  }

}
