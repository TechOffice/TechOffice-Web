import React, {Component} from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';
import DesignerForm from './designer/DesignerForm';

export default class Designer extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <ControlLabel>Designer: </ControlLabel>
          <DesignerForm></DesignerForm>
        </div>
      </div>
    );
  }
}
