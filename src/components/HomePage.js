import React,{Component} from 'react';
import styles from '../css/HomePage.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header'

const useStyles = theme =>({
  bodyStyle:{
    height:"100%",
    display:"flex",
    flexDirection:"column"
  },
  skyStyle:{
    backgroundColor:"white",
    paddingBottom:"40px"
  },
  nightSkyStyle:{
    backgroundColor:"rgb(24, 26, 27)",
    paddingBottom:"40px"    
  },
  groundStyle:{
    backgroundColor:"#d4ebf2",
    flexGrow:"1"
  },
  nightGroundStyle:{
    backgroundColor:"rgb(20, 54, 65)",
    flexGrow:"1"
  },
  fieldSetHomePage:{
    marginTop:"20px",
    display:"inline-block",
    backgroundColor:"#d4ebf2",
    marginLeft:"30px",
    outlineColor:"black",
    border: "6px solid",
  },
  nightFieldSetHomePage:{
    marginTop:"20px",
    display:"inline-block",
    backgroundColor:"rgb(20, 54, 65)",
    marginLeft:"30px",
    outlineColor:"white",
    border: "6px solid",
  },
  legendHomePage:{
    color:"black",
    fontSize:"1.3em",
    backgroundColor:"#d4ebf2",
    outlineStyle:"solid",
    outlineColor:"black",
    border:"1.5px solid",
    padding: ".5em 1em .5em 1em"  
  },
  nightLegendHomePage:{
    color:"white",
    fontSize:"1.3em",
    backgroundColor:"rgb(20, 54, 65)",
    outlineStyle:"solid",
    outlineColor:"black",
    border:"1.5px solid",
    padding: ".5em 1em .5em 1em"  
  },
  links:{
    color:"black",
    fontSize:"1.5em",
    padding:"0",
    margin:"0"
  },
  nightLinks:{
    color:"white",
    fontSize:"1.5em",
    padding:"0",
    margin:"0"
  },
  "links:visited":{
    color:"white",
    fontSize:"1.5em",
    padding:"0",
    margin:"0"
  }

})

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      nightModeChecked:false
    }
  }
  switchNightMode=(nightModeIndicator)=>{
    this.setState({
      nightModeChecked:nightModeIndicator
    })
  }
  
  render(){
    const {classes} = this.props;
    let skyStyle = this.state.nightModeChecked?classes.nightSkyStyle:classes.skyStyle
    let fieldSetHomePageStyle = this.state.nightModeChecked?classes.nightFieldSetHomePage:classes.fieldSetHomePage
    let legendHomePageStyle = this.state.nightModeChecked?classes.nightLegendHomePage:classes.legendHomePage
    let linkStyle = this.state.nightModeChecked?classes.nightLinks:classes.links
    let groundStyle = this.state.nightModeChecked?classes.nightGroundStyle:classes.groundStyle
    return(
      <React.Fragment>
        <div className={classes.bodyStyle}>
          <Header
            onSwitchNightMode={this.switchNightMode}
          />
          <Grid className={skyStyle} container>
            <Grid item md={6} xs={12}>
              <Box>
                <fieldset className={fieldSetHomePageStyle}>
                  <legend className={legendHomePageStyle}>Side Projects</legend>
                  <ul>
                      <li><a className= {linkStyle} href="/morsemessenger">Morse Messenger, Discrete Messaging</a> 
                          <a className= {linkStyle} href="https://github.com/aaronzhang1234/morsemessenger"> <GitHubIcon fontSize="small"/></a></li>
                      <li><a className= {linkStyle} href="https://bit.ly/2YagH0o">Bring Back Old Messenger Emojis</a> 
                          <a className= {linkStyle} href="https://github.com/aaronzhang1234/bringbackmessengeremojis"> <GitHubIcon fontSize="small"/></a></li>
                      <li><a className= {linkStyle} href="/fomo">FOMO, See what you missed out!</a></li>
                  </ul> 
                </fieldset>
              </Box>
            </Grid>
          </Grid>
          <div className={groundStyle}>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(HomePage);