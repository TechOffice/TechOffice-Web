import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'


class App extends Component{
	render(){
		return (
			<div>
				<FormControl type="text"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


