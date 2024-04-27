'use client'

import React, { Component } from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { styled, SxProps } from '@mui/system';
import Header from '../components/Header';
import CSS from 'csstype'

type InputProps={
    isnightmode: boolean
}

const divStyle: CSS.Properties={
  height: "100vh",
  display: "flex",
  flexDirection: "column" 
}

const StyledSky = styled(Grid)<InputProps>(props => ({
  backgroundColor: props.isnightmode ? "rgb(24, 26, 27)" : "white",
  paddingBottom: "40px"
}))

const StyledFieldSet = styled('fieldset')<InputProps>(props => ({
  outlineColor: props.isnightmode ? "white" : "black",
  backgroundColor: props.isnightmode ? "rgb(20, 54, 65)" : "#d4ebf2",
  marginTop: "20px",
  display: "inline-block",
  marginLeft: "30px",
  border: "6px solid",
  width: "80%"
}))

const StyledGround = styled('div')<InputProps>(props => ({
  backgroundColor: props.isnightmode ? "rgb(20, 54, 65)" : "#d4ebf2",
  flexGrow: "1",
}))

const StyledLegend = styled('legend')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  backgroundColor: props.isnightmode ? "rgb(20, 54, 65)" : "#d4ebf2",
  fontSize: "1.3em",
  outlineStyle: "solid",
  outlineColor: "black",
  border: "1.5px solid",
  padding: ".5em 1em .5em 1em"
}))

const StyledListItem = styled('li')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  margin: "0em .5em 0em .5em",
  fontSize: "1.5em",
}))

const StyledCategoryItem = styled('li')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  margin: "1em .5em 0em .5em",
  fontSize: "1.5em",
}))

const StyledListSummary = styled('li')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  margin: "1em .5em 1em .5em",
  fontSize: "1.5em",
}))

const StyledIcon = styled('a')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  padding: "0",
  margin: "0"
}))

const StyledColor = styled('a')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
}))

class HomePage extends Component<{}, {nightModeChecked:boolean}>{
  constructor(props) {
      super(props);
      this.state = {
        nightModeChecked: false
      }
    }
  switchNightMode = (nightModeIndicator) => {
    this.setState({
      nightModeChecked: nightModeIndicator
    })
  }
  render() {
    return (
      <React.Fragment>
        <div style={divStyle}>
          <Header
            onSwitchNightMode={this.switchNightMode}
          />
          <StyledSky isnightmode={this.state.nightModeChecked} container>
            <Grid item md={6} xs={12}>
              <Box>
                <StyledFieldSet isnightmode={this.state.nightModeChecked}>
                  <StyledLegend isnightmode={this.state.nightModeChecked}>About Me</StyledLegend>
                  <ul>
                    <StyledListSummary isnightmode={this.state.nightModeChecked}>Hi! My name's Aaron Zhang. Translated and put together, it means <StyledColor isnightmode={this.state.nightModeChecked} href="https://en.wikipedia.org/wiki/Zhang_(surname)">Archer</StyledColor> of the <StyledColor isnightmode={this.state.nightModeChecked} href="https://en.wikipedia.org/wiki/Aaron_(given_name)">High Mountain</StyledColor>.</StyledListSummary>
                    <StyledListSummary isnightmode={this.state.nightModeChecked}>I'm a Fullstack Software Engineer who likes to make websites for ideas I think about at night.</StyledListSummary>
                    <StyledListSummary isnightmode={this.state.nightModeChecked}>In my free time I like to play the piano, learn about why things work, and do random workouts</StyledListSummary>
                  </ul>
                </StyledFieldSet>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <StyledFieldSet isnightmode={this.state.nightModeChecked}>
                  <StyledLegend isnightmode={this.state.nightModeChecked}>Side Projects</StyledLegend>
                  <ul>
                    <StyledCategoryItem isnightmode={this.state.nightModeChecked}>Chrome Extensions <GoogleIcon fontSize="small" /></StyledCategoryItem>
                    <ul>
                      <StyledListItem isnightmode={this.state.nightModeChecked}><StyledColor isnightmode={this.state.nightModeChecked} href="https://bit.ly/2YagH0o">Bring Back Old Messenger Emojis</StyledColor>
                        <StyledIcon isnightmode={this.state.nightModeChecked} href="https://github.com/aaronzhang1234/bringbackmessengeremojis"><GitHubIcon fontSize="small" /></StyledIcon></StyledListItem>
                    </ul>
                  </ul>
                </StyledFieldSet>
              </Box>
            </Grid>
          </StyledSky>
          <StyledGround isnightmode={this.state.nightModeChecked}>
          </StyledGround>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;