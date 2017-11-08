import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


class App extends Component{
	render(){
		return (
			<div className="row">
				<div className="col-md-3">
					<ControlLabel>Testing: </ControlLabel>
					<FormControl type="text"/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


