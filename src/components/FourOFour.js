import React, { Component } from 'react';
import reinhard from '../imgs/main_page/reinhard.jpg'
import yangwenli from '../imgs/main_page/yangwenli.jpg'
import Header from './Header.js'
import {styled} from '@mui/system'

const StyledErrorText = styled('h1')(props=>({
  color: props.isNightMode? "white" : "black",
  textAlign: "center" 
}))

const StyledErrorImage = styled('img')({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "25%"
})

class FourOFour extends Component {
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
    let errorImage = this.state.nightModeChecked ? reinhard : yangwenli
    let backgroundStyle = this.state.nightModeChecked ? "rgb(24, 26, 27)" : "white"
    document.body.style.backgroundColor = backgroundStyle
    return (
      <React.Fragment>
        <Header
          onSwitchNightMode={this.switchNightMode}
        />
        <StyledErrorText isNightMode={this.state.nightModeChecked}>404 PAGE NOT FOUND</StyledErrorText>
        <StyledErrorImage src={errorImage} alt="404"></StyledErrorImage>
        <StyledErrorText isNightMode={this.state.nightModeChecked}>Chill here a bit. Then try again.</StyledErrorText>
      </React.Fragment>
    );
  }
}

export default FourOFour;