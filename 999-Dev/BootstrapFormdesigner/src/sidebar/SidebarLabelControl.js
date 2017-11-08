import React, {Component} from 'react';
import Draggable from '../common/Draggable'

export default class SidebarLabelControl extends Draggable {
  
  constructor(props){
    super(props);
    this.desc = "Label";
    this.data = {
      type: "label",
      props: {
        children: "label"
      }
    };
  }

}
