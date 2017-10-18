import React, {Component} from 'react';
import DragDropManager from '../DragDropManager';

export default class Droppable extends Component{

  constructor(props){
    super(props);
    this.childrenSeq = 0;
    this.childrens = [];
    this.state = {childrens: this.childrens};
  }

  allowDrop(event){
    event.preventDefault();
  }

  onDrop(event){
    event.stopPropagation();
    event.preventDefault();
    var data = JSON.parse(event.dataTransfer.getData("data"));
    data.props = data.props || {};
    var element = null;
    if (data.type == 'div'){
      element = <Droppable key={this.childrenSeq} {...data.props}/>
    }else {
      data.props.key = this.childrenSeq;
      element = React.createElement(data.type, data.props);
    }
    this.childrenSeq++;

    this.childrens.push(element);
    this.setState({childrens: this.childrens});

    var manager = DragDropManager;
    var draggable = DragDropManager.getInstance().getDraggable();
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
