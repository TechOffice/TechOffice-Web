import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarInputControl extends Draggable{

  constructor(props){
    super(props);
    this.desc = "Input";
    this.data = {
      type: "input",
      props: {
        className: "form-control",
        disabled: true
      }
    };
  }

}
