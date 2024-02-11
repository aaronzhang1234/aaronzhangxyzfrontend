import React,{Component} from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import WebIcon from '@mui/icons-material/Web';
import {styled} from '@mui/system'
import Header from './Header'

const StyledSky = styled(Grid)(props=>({
  backgroundColor: props.isNightMode ? "rgb(24, 26, 27)" : "white",
  paddingBottom:"40px" 
}))

const StyledFieldSet = styled('fieldset')(props=>({
  outlineColor: props.isNightMode ? "white" : "black",
  backgroundColor: props.isNightMode ? "rgb(20, 54, 65)" : "#d4ebf2",
  marginTop:"20px",
  display:"inline-block",
  marginLeft:"30px",
  border: "6px solid",
  width:"80%"
}))

const StyledGround = styled('div')(props=>({
  backgroundColor: props.isNightMode ? "rgb(20, 54, 65)" : "#d4ebf2",
  flexGrow:"1",
}))

const StyledLegend = styled('legend')(props=>({
  color: props.isNightMode ? "white" : "black",
  backgroundColor: props.isNightMode ? "rgb(20, 54, 65)": "#d4ebf2",
  fontSize:"1.3em",
  outlineStyle:"solid",
  outlineColor:"black",
  border:"1.5px solid",
  padding: ".5em 1em .5em 1em"  
}))

const StyledListItem = styled('li')(props =>({
  color: props.isNightMode ? "white" : "black",
  margin:"0em .5em 0em .5em",
  fontSize:"1.5em", 
}))

const StyledCategoryItem = styled('li')(props=>({
  color: props.isNightMode ? "white" : "black",
  margin:"1em .5em 0em .5em",
  fontSize:"1.5em",
}))

const StyledListSummary = styled('li')(props=>({
  color: props.isNightMode ? "white" : "black",
  margin:"1em .5em 1em .5em",
  fontSize:"1.5em",
}))

const StyledIcon = styled('a')(props=>({
  color: props.isNightMode ? "white" : "black",
  padding:"0",
  margin:"0"
}))

const StyledColor = styled('a')(props=>({
  color: props.isNightMode ? "white" : "black",
}))

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
  render() {
    return(
      <React.Fragment>
        <div sx={{ height:"100%",
                  display:"flex",
                  flexDirection:"column"}}>
          <Header
            onSwitchNightMode={this.switchNightMode}
          />
          <StyledSky isNightMode={this.state.nightModeChecked} container>
            <Grid item md={6} xs={12}>
              <Box>
                <StyledFieldSet isNightMode={this.state.nightModeChecked}>
                  <StyledLegend isNightMode={this.state.nightModeChecked}>About Me</StyledLegend>
                  <ul>
                      <StyledListSummary isNightMode={this.state.nightModeChecked}>Hi! My name's Aaron Zhang. Translated and put together, it means <StyledColor isNightMode={this.state.nightModeChecked} href="https://en.wikipedia.org/wiki/Zhang_(surname)">Archer</StyledColor> of the <StyledColor isNightMode={this.state.nightModeChecked} href="https://en.wikipedia.org/wiki/Aaron_(given_name)">High Mountain</StyledColor>.</StyledListSummary>
                      <StyledListSummary isNightMode={this.state.nightModeChecked}>I'm a Fullstack Software Engineer who likes to make websites for ideas I think about at night.</StyledListSummary>
                      <StyledListSummary isNightMode={this.state.nightModeChecked}>In my free time I like to play the piano, learn about why things work, and do random workouts</StyledListSummary>
                  </ul>
                </StyledFieldSet>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <StyledFieldSet isNightMode={this.state.nightModeChecked}>
                  <StyledLegend isNightMode={this.state.nightModeChecked}>Side Projects</StyledLegend>
                  <ul>
                    <StyledCategoryItem isNightMode={this.state.nightModeChecked}>Chrome Extensions <GoogleIcon fontSize="small"/></StyledCategoryItem>
                    <ul>
                      <StyledListItem><StyledColor isNightMode={this.state.nightModeChecked} href="https://bit.ly/2YagH0o">Bring Back Old Messenger Emojis</StyledColor> 
                          <StyledIcon isNightMode={this.state.nightModeChecked} href="https://github.com/aaronzhang1234/bringbackmessengeremojis"><GitHubIcon fontSize="small"/></StyledIcon></StyledListItem>
                    </ul>
                    <StyledCategoryItem isNightMode={this.state.nightModeChecked}>Apps <AppleIcon fontSize="small"/></StyledCategoryItem>
                    <ul>
                      <StyledListItem><StyledColor isNightMode={this.state.nightModeChecked} href="/morsemessenger">Morse Messenger, Discrete Messaging</StyledColor> 
                          <StyledIcon isNightMode={this.state.nightModeChecked} href="https://github.com/aaronzhang1234/morsemessengerapp"><GitHubIcon fontSize="small"/></StyledIcon></StyledListItem>                      
                    </ul>
                    <StyledCategoryItem isNightMode={this.state.nightModeChecked}>Websites <WebIcon fontSize="small"/></StyledCategoryItem>                      
                    <ul>
                      <StyledListItem><StyledColor isNightMode={this.state.nightModeChecked} href="/ifyouinvestedin">If you invested in ...</StyledColor></StyledListItem>
                    </ul>
                  </ul> 
                </StyledFieldSet>
              </Box>
            </Grid>
          </StyledSky>
        </div>
        <StyledGround isNightMode={this.state.nightModeChecked} container>
        </StyledGround>
      </React.Fragment>
    );
  }
}

export default (HomePage);