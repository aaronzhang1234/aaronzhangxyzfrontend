import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage.js'
import FOMO from './components/fomo/FOMO.js'
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
         <Router>
          <Switch>
            <Route path="/FOMO">
              <FOMO/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
    );
  };
}

export default App;
