import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';

export default class Designer extends Component{
  render(){
    return (
      <div className="col-md-3">
        <ControlLabel>Designer: </ControlLabel>
      </div>
    );
  }
}
