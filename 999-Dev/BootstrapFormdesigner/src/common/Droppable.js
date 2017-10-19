import React, {Component} from 'react';

export default class Droppable extends Component{

  constructor(props){
    super(props);
    this.childrens = [];
    this.state = {childrens: this.childrens};
  }

  allowDrop(event){
    event.preventDefault();
  }

  onDrop(event){
    event.preventDefault();
    var data = JSON.parse(event.dataTransfer.getData("data"));
    var element = React.createElement(data.type, data.props);
    this.childrens.push(element);
    this.setState({childrens: this.childrens});
  }

  render(){
    return (
      <div style={{height: this.height, width: this.width}}
        onDragOver={this.allowDrop.bind(this)} onDrop={this.onDrop.bind(this)}>
        <div>{this.state.childrens}</div>
      </div>
    );
  }

}
