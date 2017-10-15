import React, {Component} from 'react';

export default class Droppable {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
