import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
// import Assignment from './components/dashboard/assignment/Assignment';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/"  component={Dashboard}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
