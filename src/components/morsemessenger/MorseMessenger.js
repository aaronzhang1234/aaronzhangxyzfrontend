import React,{Component} from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import WifiIcon from '@material-ui/icons/Wifi';
import LockIcon from '@material-ui/icons/Lock';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import config from '../../config.js';
import download from '../../imgs/morsemessenger/download.png'
import TextField from '@material-ui/core/TextField';


const useStyles = theme =>({
    blueGrid:{
        backgroundColor:"#d4ebf2",
        minHeight:"250px",
        maxHeight:"100%"
    },
    whiteGrid:{
        backgroundColor:'white',
        minHeight:"250px",
        maxHeight:"100%"
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }

});

class MorseMessenger extends Component {
  constructor(props){
        super(props)
        this.state = {
            channel:"",
            message:"",
            isLoading: false,
            error: false
        }
  }
  
  render(){
      const {classes} = this.props;
    return(
      <React.Fragment>
            <Grid className={classes.whiteGrid} justify="center" alignItems="center" container>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <Box style={{ width:"50%"}}>
                        <h1 className={classes.titleText}>Morse</h1>
                        <h1 className={classes.titleText}>Messenger</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                    <a href="#tryitout" className={classes.tryitout}>
                        <Box className={classes.oval}>
                            <h1 className={classes.buttonCenteredText}>Try Now</h1>
                        </Box>
                    </a>
                    <p className={classes.titleExplainer} >Morse Messenger is a revolutionary application which truly tests the limits of online communication by removing the need see and hear</p>
                </Grid>
            </Grid>
            <Grid className={classes.blueGrid} justify="center" alignItems="center" container>
                <Grid item xs={12} sm={4} md={3} align="center">
                    <Box style={{display:"flex"}}>
                        <WifiIcon style={{fontSize:"125px"}}/>                        
                        <Box>
                            <h1 style={{textAlign:"left"}}>Scalable</h1>
                            <h4 style={{textAlign:"left"}}>Working on Pusher infrastructure, if I paid more money, this would rival Facebook Messenger</h4>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} align="center">
                    <Box style={{display:"flex"}}>                            
                        <FlashOnIcon style={{fontSize:"125px"}}/>
                        <Box>
                            <h1 style={{textAlign:"left"}}>Hassle Free</h1>
                            <h4 style={{textAlign:"left"}}>No extra bells and whistles to learn. The only requirement is an expert proficiency in morse code</h4>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}  align="center">
                    <Box style={{display:"flex"}}>                            
                        <LockIcon style={{fontSize:"125px"}}/>
                        <Box>
                            <h1 style={{textAlign:"left"}}>Secure</h1>
                            <h4 style={{textAlign:"left"}}>I will never sell your secrets to the NSA simply because I don't have to infrastructure to keep them</h4>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={classes.whiteGrid} justify="center" alignItems="center" container>
                <Grid item xs={12} align="center">
                    <h1 style={{fontSize:"75px"}}>How Does It Work?</h1>
                    <Divider style={{width:"50%"}}variant="middle"/>
                </Grid>
            </Grid>
            <Grid className={classes.blueGrid} justify="center" alignItems="center" container>
                    <Grid item xs={6} sm={5} md={4} align="center">
                        <Box className={classes.stepBox}>
                            <h1 className={classes.stepNumber}>1</h1>
                            <p className={classes.stepInstructionLeft}>Download the Morse Messenger app on the Apple App store.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={5} md={4} align="center">
                        <img style={{width:"50%"}}src={download}/>
                    </Grid>
            </Grid>
            <Grid className={classes.whiteGrid} justify="center" container>
                <Grid item xs={6} sm={5} md={4} align="center">
                </Grid>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <Box className={classes.stepBox}>
                        <p className={classes.stepInstructionRight}>Join a Channel on the app.</p>
                        <h1 className={classes.stepNumber}>2</h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={classes.blueGrid} justify="center" container>
                <Grid item xs={6} sm={5} md={4} align="center">
                    <Box className={classes.stepBox}>
                        <h1 className={classes.stepNumber}>3</h1>
                        <p className={classes.stepInstructionLeft}>Send a message with the same channel and on this website.</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={5} md={4} align="center">
                </Grid>
            </Grid>
            <Grid id="tryitout" className={classes.whiteGrid} alignItems="center" justify="center" container>
                <Grid item xs={12} align="center">
                    <fieldset style={{width:"50%"}}>
                        <form onSubmit={this.handleSubmit}>
                            <Box style={{display:"flex"}} m={2}>
                                <Grid alignItems="center" justify="center" container>
                                    <Grid item xs={6} sm={5} md={4}>
                                        <TextField required id="channelInput" label="Channel" variant="filled" />
                                    </Grid>
                                    <Grid item xs={6} sm={5} md={4}>
                                         <TextField required id="identifierInput" label="Identifier" variant="filled" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <TextField style={{width:"50%"}}required id="messageInput" label="Message" variant="filled" fullWidth />
                            <Button style={{display:"block", marginTop:"10px"}}type="submit" variant="contained" color="primary">Send a Morse Message</Button>
                        </form>
                    </fieldset>
                </Grid>
            </Grid>
            <Grid alignItems="center" justify="center" container>
                <Grid item xs={12} align="center">
                    <h2>Design By James Haggarty</h2>
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
          console.log(morse_response)
          this.setState({
              channel:"",
              message:"",
              isLoading:false
          })
      })
      .catch((err)=>{
          console.log(err)
          switch(err.response.status){
              case 400:
                  console.log("invalid parameters")
              case 429:
                  console.log("too many requests")
          }
          this.setState({
              channel:"",
              message:"",
              isLoading:false
          })
      })
  }
}

export default withStyles(useStyles)(MorseMessenger);