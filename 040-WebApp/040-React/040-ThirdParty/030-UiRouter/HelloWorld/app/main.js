import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import About from 'app/about';
import Inbox from 'app/inbox';
import Home from 'app/home';

class Main extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			route: window.location.hash.substr(1)
		};
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		});
	}
	
	render(){
		let Child;
		switch (this.state.route){
			case '/about': 	Child = About; break;
			case '/inbox': 	Child = Inbox; break;
			default: 		Child = Home; break;
		}
		return (
			<div>
				<h1>Hello World</h1>
				<ui>
					<li><a href="#/about">About</a></li>
					<li><a href="#/inbox">Inbox</a></li>
				</ui>
				<Child/>
			</div>
		);
	}
}

ReactDom.render(
  <Main/>, document.getElementById('main')
);
