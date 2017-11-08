import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class App extends Component{
	render(){
		return (
			<Draggable>
				<div>
					Hello World
				</div>
			</Draggable>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
