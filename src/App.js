import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import FourOFour from './components/FourOFour.js'

class App extends Component {
  render(){
    return(
         <Router>
          <Routes>
            <Route path="*" element={<FourOFour/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </Router>
    );
  };
}

export default App;
