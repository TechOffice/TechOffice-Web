import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';
import Draggable from './common/Draggable'

export default class Sidebar extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <ControlLabel>Sidebar: </ControlLabel>
          <Draggable><span>Testing</span></Draggable>
        </div>
      </div>
    );
  }
}
