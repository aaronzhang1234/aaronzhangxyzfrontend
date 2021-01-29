import React,{Component} from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import WifiIcon from '@material-ui/icons/Wifi';
import LockIcon from '@material-ui/icons/Lock';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import config from '../../config.js';


const useStyles = theme =>({
    blueGrid:{
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
    }

});

class MorseMessenger extends Component {
  constructor(props){
        super(props)
        this.state = {
            channel:"",
            message:""
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
                    <a href="#tryitout">
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
            <Grid className={classes.whiteGrid} justify="center" container>
                <Grid item xs={12}   align="center">
                    <h1 style={{fontSize:"75px"}}>How Does It Work?</h1>
                    <Divider style={{width:"50%"}}variant="middle"/>
                </Grid>
            </Grid>
            <Grid className={classes.blueGrid} justify="center" container>
            </Grid>
            <Grid className={classes.whiteGrid} justify="center" container>
            </Grid>
            <Grid className={classes.blueGrid} justify="center" container>
            </Grid>
            <Grid className={classes.whiteGrid} justify="center" container>
            </Grid>
            <Grid id="tryitout" className={classes.blueGrid} alignItems="center" justify="center" container>
                <Grid item xs={12}   align="center">
                    <fieldset style={{width:"50%"}}>
                        <legend style={{textAlign:"center"}}>Start Your Morses!</legend>
                        <form onSubmit={this.handleSubmit}>
                            <Box style={{display:"flex"}} m={2}>
                                <h3 style={{margin:"0"}}>Channel: </h3>
                                <input id="channelInput" 
                                type="text" 
                                onChange={this.setChannel} 
                                value={this.state.channel}/>
                            </Box>
                            <Box style={{display:"flex"}} m={2}>
                                <h3 style={{margin:"0"}}>Message: </h3>
                                <input id="messageInput" 
                                type="text" 
                                onChange={this.setMessage} 
                                value={this.state.message}/>
                            </Box>
                            <Button type="submit" variant="contained" color="primary">Send a Morse Message</Button>
                        </form>
                    </fieldset>
                </Grid>
            </Grid>
      </React.Fragment>
    );
  }
  handleSubmit=(event)=>{
      event.preventDefault();

      axios.get(config.config.backend_url+"sendMorse?channel="+this.state.channel +"&message="+this.state.message)
      .then((morse_response)=>{
            console.log(morse_response)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  setChannel=(event)=>{
    this.setState({
      channel:event.target.value
    })
  }
  setMessage=(event)=>{
    this.setState({
      message:event.target.value
    })
  }

}

export default withStyles(useStyles)(MorseMessenger);