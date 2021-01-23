import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage.js'
import FOMO from './components/fomo/FOMO.js'
import './css/FOMO.css';

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
