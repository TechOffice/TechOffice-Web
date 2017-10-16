import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarInputControl extends Draggable{

  constructor(props){
    super(props);
    this.desc = "testing";
    this.data = {
      type: "input"
    };
  }

}
