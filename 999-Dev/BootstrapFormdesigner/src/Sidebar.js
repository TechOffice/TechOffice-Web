import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';
import Draggable from './common/Draggable';
import SidebarInputControl from './sidebar/SidebarInputControl';

export default class Sidebar extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <ControlLabel>Sidebar: </ControlLabel>
          <SidebarInputControl></SidebarInputControl>
        </div>
      </div>
    );
  }
}
