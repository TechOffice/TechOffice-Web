import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarFormControl extends Draggable {
  constructor(props){
    super(props);
    this.desc = "testing";
    this.data = {
      type: "form"
    };
  }

}
