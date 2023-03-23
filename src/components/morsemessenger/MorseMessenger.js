import React,{Component} from 'react';
import axios from 'axios';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import WifiIcon from '@mui/icons-material/Wifi';
import LockIcon from '@mui/icons-material/Lock';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import config from '../../config.js';
import download from '../../imgs/morsemessenger/download.png'
import send from '../../imgs/morsemessenger/send.png'
import group from '../../imgs/morsemessenger/group.png'
import TextField from '@mui/material/TextField';
import Header from '../Header'

const useStyles = theme =>({
    firstGrid:{
        backgroundColor:'white',
        minHeight:"250px",
        maxHeight:"100%"
    },
    darkFirstGrid:{
        backgroundColor:"rgb(24, 26, 27)",
        minHeight:"250px",
        maxHeight:"100%"
    },
    secondGrid:{
        backgroundColor:"#d4ebf2",
        minHeight:"250px",
        maxHeight:"100%"
    },
    darkSecondGrid:{
        backgroundColor:"rgb(20, 54, 65)",
        minHeight:"250px",
        maxHeight:"100%"
    },
    creditsGrid:{
        backgroundColor:'white',
    },
    darkCreditsGrid:{
        backgroundColor:"rgb(24, 26, 27)",
    },
    oval:{
        textAlign:"center",
        verticalAlign:"middle",
        marginTop:"20px",
        width:"290px",
        height:"75px",
        backgroundColor:"#d4ebf2",
        borderRadius:"40px"
    },
    darkOval:{
        textAlign:"center",
        verticalAlign:"middle",
        marginTop:"20px",
        width:"290px",
        height:"75px",
        backgroundColor:"rgb(20, 54, 65)",
        borderRadius:"40px"
    },
    'tryitout:visited':{
        textDecoration: "none",
        color:"black"
    },
    tryitout:{
        textDecoration: "none",
        color:"black"
    },
    buttonCenteredText:{
        textAlign:"center",
        verticalAlign:"middle",
        lineHeight:"75px"
    },
    titleText:{
        fontSize:"50px",
        margin:0,
        textAlign:"left"
    },
    titleExplainer:{
        fontSize:"20px",
    },
    stepBox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    stepNumber:{
        fontSize:"200px",
        opacity:"0.5",
        margin:0,
        zIndex:1
    },
    stepInstructionRight:{
        height:"50%",
        marginRight:"-100px",
        textAlign:"right",
        fontSize:"35px",
        fontWeight:"bold",
        zIndex:2
    },
    stepInstructionLeft:{
        height:"50%",
        marginLeft:"-100px",
        textAlign:"left",
        fontSize:"35px",
        fontWeight:"bold",
        zIndex:2
    },
    errorBox:{
        width:"50%",
        backgroundColor:"red"
    },
    successBox:{
        width:"50%",
        backgroundColor:"#d4ebf2"
    },
    backdrop: {
        color: '#fff',
    },
    darkTextField:{
        backgroundColor:"white"
    }
});

class MorseMessenger extends Component {
  constructor(props){
        super(props)
        this.state = {
            response_message:"",
            channel:"",
            message:"",
            error:false,
            isLoading: false,
            message_sent: false,
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
      const {error, response_message, message_sent} = this.state; 
      let darkText = {
          color:"white"
      }
      let lightText={
          color:"black"
      }
      let textColor = this.state.nightModeChecked?darkText:lightText
      let firstGridStyle = this.state.nightModeChecked?classes.darkFirstGrid:classes.firstGrid
      let secondGridStyle = this.state.nightModeChecked?classes.darkSecondGrid:classes.secondGrid
      let ovalStyle = this.state.nightModeChecked?classes.darkOval:classes.oval
      let textFieldStyle = this.state.nightModeChecked?classes.darkTextField:""
      let creditsGridStyle = this.state.nightModeChecked?classes.darkCreditsGrid:classes.creditsGrid
    return(
      <React.Fragment>
          <Header
            onSwitchNightMode={this.switchNightMode}
          />
            <Grid className={firstGridStyle} justifyContent="center" alignItems="center" container>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <Box style={{ width:"50%"}}>
                        <h1 className={classes.titleText} style={textColor} >Morse</h1>
                        <h1 className={classes.titleText} style={ textColor} >Messenger</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <a href="#tryitout" className={classes.tryitout}>
                        <Box className={ovalStyle}>
                            <h1 className={classes.buttonCenteredText} style={ textColor}>Try Now</h1>
                        </Box>
                    </a>
                    <p className={classes.titleExplainer} style={ textColor}>Morse Messenger is a revolutionary application which truly tests the limits of online communication by removing the need see and hear</p>
                </Grid>
            </Grid>
            <Grid className={secondGridStyle} justifyContent="center" alignItems="center" container>
                <Grid item xs={12} sm={4} md={3} align="center">
                    <Box style={{display:"flex"}}>
                        <WifiIcon style={{...textColor,...{fontSize:"125px"}}}/>                        
                        <Box>
                            <h1 style={{...textColor,...{textAlign:"left"}}} >Scalable</h1>
                            <h4 style={{...textColor,...{textAlign:"left"}}} >Working on Pusher infrastructure, if I paid more money, this would rival Facebook Messenger</h4>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} align="center">
                    <Box style={{display:"flex"}}>                            
                        <FlashOnIcon style={{ ...textColor,...{fontSize:"125px"}}} />
                        <Box>
                            <h1 style={{...textColor,...{textAlign:"left"}}}>Hassle Free</h1>
                            <h4 style={{...textColor,...{textAlign:"left"}}} >No extra bells and whistles to learn. The only requirement is an expert proficiency in morse code</h4>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}  align="center">
                    <Box style={{display:"flex"}}>                            
                        <LockIcon style={{...textColor,...{fontSize:"125px"}}}/>
                        <Box>
                            <h1 style={{...textColor,...{textAlign:"left"}}}  >Secure</h1>
                            <h4 style={{...textColor,...{textAlign:"left"}}}  >I will never sell your secrets to the NSA simply because I don't have to infrastructure to keep them</h4>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={firstGridStyle} justifyContent="center" alignItems="center" container>
                <Grid item xs={12} align="center">
                    <h1 style={{...textColor,...{fontSize:"75px"}}}  >How Does It Work?</h1>
                    <Divider style={{width:"50%"}}variant="middle"/>
                </Grid>
            </Grid>
            <Grid className={secondGridStyle} justifyContent="center" alignItems="center" container>
                    <Grid item xs={6} sm={5} md={4} align="center">
                        <Box className={classes.stepBox}>
                            <h1 className={classes.stepNumber} style={ textColor} >1</h1>
                            <p className={classes.stepInstructionLeft} style={ textColor} >Download the Morse Messenger app on the Apple App store.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={5} md={4} align="center">
                        <img style={{width:"40%"}}src={download} alt="represenation of download"/>
                    </Grid>
            </Grid>
            <Grid className={firstGridStyle} alignItems="center" justifyContent="center" container>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <img style={{width:"40%"}} src={group} alt="join a group"/>
                </Grid>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <Box className={classes.stepBox}>
                        <p className={classes.stepInstructionRight} style={ textColor} >Join a Channel on the app.</p>
                        <h1 className={classes.stepNumber} style={ textColor} >2</h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={secondGridStyle} justifyContent="center" alignItems="center" container>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <Box className={classes.stepBox}>
                        <h1 className={classes.stepNumber} style={ textColor} >3</h1>
                        <p className={classes.stepInstructionLeft} style={ textColor} >Send a message on this website with the same channel</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <img style={{width:"60%"}} src={send} alt="send a message"/>
                </Grid>
            </Grid>
            <Grid id="tryitout" className={firstGridStyle} alignItems="center" justifyContent="center" container>
                <Grid item xs={12} align="center">
                    {message_sent &&(
                        <Box className={error?classes.errorBox : classes.successBox}>
                           <h1>{response_message}</h1> 
                        </Box>
                    )}
                    <fieldset style={{width:"50%"}}>
                        <form onSubmit={this.handleSubmit}>
                            <Box style={{display:"flex"}} m={2}>
                                <Grid alignItems="center" justifyContent="center" container>
                                    <Grid item xs={6} sm={5} md={4}>
                                        <TextField className={textFieldStyle} required id="channelInput" label="Channel" variant="filled" />
                                    </Grid>
                                    <Grid item xs={6} sm={5} md={4}>
                                         <TextField className={textFieldStyle} required id="identifierInput" label="Identifier" variant="filled" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <TextField className={textFieldStyle} style={{width:"50%"}}required id="messageInput" label="Message" variant="filled" fullWidth />
                            <Button style={{display:"block", marginTop:"10px"}}type="submit" variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Send a Morse Message</Button>
                        </form>
                    </fieldset>
                </Grid>
            </Grid>
            <Grid className={creditsGridStyle} alignItems="center" justifyContent="center" container>
                <Grid item xs={12} align="center">
                    <h4  style={textColor}>Design By James Haggarty</h4>
                </Grid>
            </Grid>
            <Backdrop className={classes.backdrop} open={this.state.isLoading}>
                <Box>
                    <h1>Sending Morses</h1>
                </Box>
                <CircularProgress color="inherit" />
            </Backdrop>
      </React.Fragment>
    );
  }
  handleSubmit=(event)=>{
      this.setState({
          isLoading:true
      })

      event.preventDefault();
      let channel = event.target["channelInput"].value
      let identifier = event.target["identifierInput"].value
      let message= event.target["messageInput"].value

      axios.get(config.config.backend_url+"sendMorse?channel="+channel +"&identifier="+identifier+"&message="+message)
      .then((morse_response)=>{
          this.setState({
              message_sent:true,
              error:false,
              response_message:"Success, your message has been sent!",
              channel:"",
              message:"",
              isLoading:false
          })
      })
      .catch((err)=>{
          let response_message = ""
          if(err.response == null){
           response_message = "An unexpected error has occurred" 
          }else{
            switch(err.response.data.status_code){
                case 400:
                    response_message = err.response.data.response
                    break;
                case 429:
                    response_message = "Hold your Morses buddy. You've been rate limited. Try again later."
                    break;
                default:
                    response_message = "An unexpected error has occured"
            }
          }
          this.setState({
              message_sent:true,
              error:true,
              response_message:response_message,
              channel:"",
              message:"",
              isLoading:false
          })
      })
  }
}

export default withStyles(useStyles)(MorseMessenger);