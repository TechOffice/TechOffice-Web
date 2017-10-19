import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarColControl extends Draggable {
  constructor(props){
    super(props);
    this.desc = "Col";
    this.data = {
      type: "div",
      props: {
          style: {minHeight: 10, minWidth: 10, border: "1px solid"},
          className: "col-md-1"
      }
    };
  }

}
