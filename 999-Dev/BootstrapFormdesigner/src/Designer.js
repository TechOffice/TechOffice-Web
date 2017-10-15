import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';

export default class Designer extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <ControlLabel>Designer: </ControlLabel>
        </div>
      </div>
    );
  }
}
