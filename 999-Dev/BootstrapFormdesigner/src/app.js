import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Designer from './Designer'

class App extends Component{
  render(){
    return (
      <form>
        <div className="row">
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-6">
            <Designer/>
          </div>
        </div>
      </form>
    );
  }
}

$(function(){
  ReactDOM.render(<App />, document.getElementById('app'));
})
