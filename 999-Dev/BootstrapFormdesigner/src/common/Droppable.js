import React, {Component} from 'react';

export default class Droppable extends Component{

  constructor(props){
    super(props);
    this.childrens = [];
    this.childrens.push(this.props.children);
  }

  allowDrop(event){
    event.preventDefault();
  }

  onDrop(event){
    debugger;
    event.preventDefault();
    var data = event.dataTransfer.getData("data");
    this.childrens.push(<div>testing</div>);
  }

  render(){
    this.childrens.push(<div key="">testing</div>);
    return (
      <div style={{height: this.height, width: this.width}}
        onDragOver={this.allowDrop.bind(this)} onDrop={this.onDrop.bind(this)}>
        {this.childrens}
      </div>
    );
  }

}
