import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import reinhard from '../imgs/main_page/reinhard.jpg'
import yangwenli from '../imgs/main_page/yangwenli.jpg'
import Header from './Header.js'

const useStyles = theme =>({
  errorText:{
    textAlign:"center"
  },
  errorImage:{
    display:"block",
    marginLeft:"auto",
    marginRight:"auto",
    width:"25%"
  }
})
class FourOFour extends Component {
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
    const {classes} = this.props
    let errorImage = this.state.nightModeChecked?reinhard:yangwenli
    let backgroundStyle = this.state.nightModeChecked?"rgb(24, 26, 27)":"white"
    document.body.style.backgroundColor=backgroundStyle
    let darkText = {
        color:"white"
    }
    let lightText={
        color:"black"
    }
    let textColor = this.state.nightModeChecked?darkText:lightText
    return(
      <React.Fragment>
        <Header
          onSwitchNightMode={this.switchNightMode}
        />
        <h1 className={classes.errorText} style={textColor}>404 PAGE NOT FOUND</h1>
        <img className={classes.errorImage} src={errorImage}></img>
        <h2 className={classes.errorText} style={textColor}>Chill here a bit. Then try again.</h2>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(FourOFour);