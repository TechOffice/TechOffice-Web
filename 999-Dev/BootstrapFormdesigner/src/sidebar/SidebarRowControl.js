import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarRowControl extends Draggable {
  constructor(props){
    super(props);
    this.desc = "Row";
    this.data = {
      type: "div",
      props: {
          style: {minHeight: 10, minWidth: 10, border: "1px solid"},
          className: "row"
      }
    };
  }

}
