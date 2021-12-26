import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
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
          <Routes>
            <Route path="*" element={<FourOFour/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/morsemessenger" element={<MorseMessenger/>}/>
            <Route path="/ifyouinvestedin" element={<FOMO/>}/>
          </Routes>
        </Router>
    );
  };
}

export default App;
