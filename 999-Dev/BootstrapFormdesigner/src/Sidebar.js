import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';

export default class Sidebar extends Component{
  render(){
    return (
      <div className="col-md-3">
        <ControlLabel>Sidebar: </ControlLabel>
      </div>
    );
  }
}
