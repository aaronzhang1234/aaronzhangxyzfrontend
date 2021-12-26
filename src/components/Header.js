import React,{Component} from 'react';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ls from 'local-storage'

const useStyles = theme =>({
  emailTitleStyle:{
    marginLeft:"25px",
    marginRight:"25px",
  },
  lightHeaderStyle:{
      backgroundColor:"#d4ebf2"
  },
  nightHeaderStyle:{
    backgroundColor:"rgb(20, 54, 65)"
  },
  nightModeContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
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
    }
    ls.set("nightModeChecked", changedNightModeChecked)
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
      this.setState({
        nightModeChecked:nightModeIndicator
      })
      const{onSwitchNightMode} = this.props;
      try{
          onSwitchNightMode(nightModeIndicator)
      }catch{
      }
  }
  render(){
    const {classes} = this.props;
    let headerStyle = this.state.nightModeChecked ? classes.nightHeaderStyle : classes.lightHeaderStyle
    let darkText = {
        color:"white"
    }
    let lightText={
        color:"black"
    }
    let textColor = this.state.nightModeChecked?darkText:lightText
    return(
      <React.Fragment>
          <Grid className={headerStyle} alignItems="center" container>
            <Grid item xs={12} md={11}>
              <Box alignItems='center' style={{display:"flex"}}>
                <h2 className={classes.emailTitleStyle} style={textColor}><a style={textColor} href="/">aaronzhang.xyz</a> [at] gmail.com</h2>
                <a style={textColor} href="https://github.com/aaronzhang1234"><GitHubIcon fontSize="large"/></a> 
                <a style={textColor} href="https://www.linkedin.com/in/aaronzhang1234/"><LinkedInIcon fontSize="large"/></a>
              </Box>
            </Grid>
            <Grid item xs={12} md={1}>
              <Box alignItems='center' className={classes.nightModeContainer}>
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