import React,{Component} from 'react';
import styles from '../css/HomePage.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

class HomePage extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <div id="header"> 
            <h1 id ="title">Aaron Zhang</h1>
            <h2 id ="email">aaronzhang.xyz@gmail.com</h2>
            <a href="https://github.com/aaronzhang1234"><GitHubIcon fontSize="large"/></a> 
            <a href="https://www.linkedin.com/in/aaronzhang1234/"><LinkedInIcon fontSize="large"/></a>
            <a href={window.location.origin + '/resume.pdf'}><DescriptionIcon fontSize="large"/></a>
        </div>
        <div class = "row">
            <fieldset class="columns">
                <legend>Side Projects</legend>
                <ul>
                    <li><a class="links" href="http://morsemessenger.com">Morse Messenger, Discrete Messaging</a> <a href="https://github.com/aaronzhang1234/morsemessenger"><GitHubIcon fontSize="small"/></a></li>
                    <li><a class="links" href="https://bit.ly/2YagH0o">Bring Back Old Messenger Emojis</a> <a href="https://github.com/aaronzhang1234/bringbackmessengeremojis"><GitHubIcon fontSize="small"/></a></li>
                    <li><a class="links" href="/FOMO">FOMO, See what you missed out!</a></li>
              </ul> 
            </fieldset>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;