import React,{Component} from 'react';
import reinhard from '../imgs/main_page/reinhard.jpg'

class FourOFour extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <h1 class="FourOFourText">404 PAGE NOT FOUND</h1>
        <img id="FourOFourImage" src={reinhard}></img>
        <h2 class="FourOFourText">Chill and drink some tea. Then try again.</h2>
        <h3 class="FourOFourText"><a href="/">Back to Safety!</a></h3>
      </React.Fragment>
    );
  }
}

export default FourOFour;