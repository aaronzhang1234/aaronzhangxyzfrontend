import React,{Component} from 'react';
import styles from '../css/HomePage.css';
import github_large from '../imgs/main_page/git_dark_large.png'
import twitter_large from '../imgs/main_page/twitter_logo_blue.png'
import linkedin_large from '../imgs/main_page/linkedin_logo_blue.png'
import gihub_small from '../imgs/main_page/git_dark_small.png'
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
            <a href="https://github.com/aaronzhang1234"><img class="promo_img"src={github_large}/></a> 
            <a href="https://twitter.com/icsllaf"><img class="promo_img" src={twitter_large}/></a>
            <a href="https://www.linkedin.com/in/aaronzhang1234/"><img class="promo_img" src={linkedin_large}/></a>
        </div>
        <div class = "row">
            <fieldset class="columns">
                <legend>Side Projects</legend>
                <ul>
                    <li><a class="links" href="http://morsemessenger.com">Morse Messenger, Discrete Messaging</a> <a href="https://github.com/aaronzhang1234/morsemessenger"><img class="inline_img" src={gihub_small}></img></a></li>
                    <li><a class="links" href="https://chrome.google.com/webstore/detail/bring-back-old-messenger/odffoccbncldkpodebegbddmmmhfinbm">Bring Back Old Messenger Emojis</a> <a href="https://github.com/aaronzhang1234/bringbackmessengeremojis"><img class="inline_img" src={gihub_small}></img></a></li>
                    <li><a class="links" href="/FOMO">FOMO, See what you missed out!</a></li>
              </ul> 
            </fieldset>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;