import React, {Component} from 'react';
import Droppable from '../common/Droppable';

export default class DesignerForm extends Droppable {

  constructor(props){
    super(props);
    this.height = 600;
    this.width = 1000;
  }

}
