import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import FOMO from './components/fomo/FOMO.js';
import FourOFour from './components/FourOFour.js'
import MorseMessenger from './components/morsemessenger/MorseMessenger.js'

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
         <Router>
          <Switch>
            <Route exact path="/morsemessenger">
              <MorseMessenger/>
            </Route>
            <Route exact path="/404">
              <FourOFour/>
            </Route>
            <Route exact path="/ifyouinvestedin">
              <FOMO/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  };
}

export default App;
