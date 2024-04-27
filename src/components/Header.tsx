import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { styled } from '@mui/system'

type InputProps = {
  isnightmode: boolean
}

type HeaderProps = {
  onSwitchNightMode: (any)=>void
}

type HeaderState = {
  nightModeChecked: boolean,
}

const StyledHeader = styled(Grid)<InputProps>(props => ({
  backgroundColor: props.isnightmode ? "rgb(20, 54, 65)" : "#d4ebf2"
}))

const StyledEmail = styled('h2')<InputProps>(props => ({
  color: props.isnightmode ? "white" : "black",
  marginLeft: "25px",
  marginRight: "25px",
}))

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      nightModeChecked: false
    }
  }
  switchNightMode = () => {
    let changedNightModeChecked = !this.state.nightModeChecked
    const { onSwitchNightMode } = this.props;
    try {
      onSwitchNightMode(changedNightModeChecked)
    } catch {
    }
    localStorage.setItem("nightModeChecked", String(changedNightModeChecked))
    this.setState({
      nightModeChecked: changedNightModeChecked
    })
  }

  nightModeIcon = () => {
    if (this.state.nightModeChecked) {
      return (
        <Brightness2Icon style={{ color: "white" }} />
      )
    } else {
      return (
        <BrightnessHighIcon />
      )
    }
  }
  componentDidMount() {
    let nightModeIndicator = JSON.parse(localStorage.getItem("nightModeChecked"))
    this.setState({
      nightModeChecked: nightModeIndicator
    })
    const { onSwitchNightMode } = this.props;
    try {
      onSwitchNightMode(nightModeIndicator)
    } catch {
    }
  }
  render() {
    let darkText = {
      color: "white"
    }
    let lightText = {
      color: "black"
    }
    let textColor = this.state.nightModeChecked ? darkText : lightText
    return (
      <React.Fragment>
        <StyledHeader isnightmode={this.state.nightModeChecked} alignItems="center" container>
          <Grid item xs={12} md={11}>
            <Box alignItems='center' style={{ display: "flex" }}>
              <StyledEmail isnightmode={this.state.nightModeChecked}><a style={textColor} href="/">aaronzhang.xyz</a> [at] gmail.com</StyledEmail>
              <a style={textColor} href="https://github.com/aaronzhang1234"><GitHubIcon fontSize="large" /></a>
              <a style={textColor} href="https://www.linkedin.com/in/aaronzhang1234/"><LinkedInIcon fontSize="large" /></a>
            </Box>
          </Grid>
          <Grid item xs={12} md={1}>
            <Box alignItems='center' sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <this.nightModeIcon />
              <Switch
                checked={this.state.nightModeChecked}
                onChange={this.switchNightMode}
              />
            </Box>
          </Grid>
        </StyledHeader>
      </React.Fragment>
    );
  }
}

export default Header;