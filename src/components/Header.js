import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Switch from '@material-ui/core/Switch';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ls from 'local-storage'

const useStyles = theme =>({
  lightEmailTitle:{
    marginLeft:"25px",
    marginRight:"25px",
    color:"black"
  },
  nightEmailTitle:{
    marginLeft:"25px",
    marginRight:"25px",
    color:"white"
  },
  lightHeaderStyle:{
      backgroundColor:"#d4ebf2"
  },
  nightHeaderStyle:{
    backgroundColor:"rgb(20, 54, 65)"
  },
  lightEmailTitleLink:{
      color:"black"
  },
  nightEmailTitleLink:{
      color:"white"
  },
  "emailTitleLink:visited":{
      color:"white"
  }
})

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      nightModeChecked:false
    }
  }
  switchNightMode=()=>{
    let changedNightModeChecked = !this.state.nightModeChecked
    const{onSwitchNightMode} = this.props;
    try{
        onSwitchNightMode(changedNightModeChecked)
    }catch{
        console.log("too lazy to implement dark mode on this page")
    }
    ls.set("nightModeChecked", changedNightModeChecked)
    console.log(ls.get("nightModeChecked"))
    this.setState({
        nightModeChecked:changedNightModeChecked
      })
  }
  
  nightModeIcon=()=>{
    if(this.state.nightModeChecked){
        return(
            <Brightness2Icon style={{color:"white"}}/>   
        )
    }else{
        return(
            <BrightnessHighIcon/>
        )
    }
  }
  componentDidMount(){
      let nightModeIndicator = ls.get("nightModeChecked")
      console.log("stuff is " + nightModeIndicator)
      this.setState({
        nightModeChecked:nightModeIndicator
      })
      const{onSwitchNightMode} = this.props;
      try{
          onSwitchNightMode(nightModeIndicator)
      }catch{
          console.log("too lazy to implement dark mode on this page")
      }
  }
  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
          <Grid className={this.state.nightModeChecked?classes.nightHeaderStyle:classes.lightHeaderStyle} alignItems="center" container>
            <Grid item xs={11}>
              <Box alignItems='center' style={{display:"flex"}}>
                <h2 className={this.state.nightModeChecked?classes.nightEmailTitle:classes.lightEmailTitle}><a className={this.state.nightModeChecked?classes.nightEmailTitleLink:classes.lightEmailTitleLink} href="/">aaronzhang.xyz</a> [at] gmail.com</h2>
                <a className={this.state.nightModeChecked?classes.nightEmailTitleLink:classes.lightEmailTitleLink}href="https://github.com/aaronzhang1234"><GitHubIcon fontSize="large"/></a> 
                <a className={this.state.nightModeChecked?classes.nightEmailTitleLink:classes.lightEmailTitleLink} href="https://www.linkedin.com/in/aaronzhang1234/"><LinkedInIcon fontSize="large"/></a>
                <a className={this.state.nightModeChecked?classes.nightEmailTitleLink:classes.lightEmailTitleLink}href={window.location.origin + '/resume.pdf'}><DescriptionIcon fontSize="large"/></a>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box>
                <this.nightModeIcon/>
                <Switch
                  checked={this.state.nightModeChecked}
                  onChange={this.switchNightMode}
                />
              </Box>
            </Grid>
          </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Header);