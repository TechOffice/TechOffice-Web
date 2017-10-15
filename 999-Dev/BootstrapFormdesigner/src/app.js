import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Designer from './Designer'

class App extends Component{
  render(){
    return (
      <form>
        <div className="row">
          <Sidebar/>
          <Designer/>
        </div>
      </form>
    );
  }
}

$(function(){
  ReactDOM.render(<App />, document.getElementById('app'));
})
