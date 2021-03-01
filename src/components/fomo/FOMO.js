import React,{Component} from 'react';
import axios from 'axios';
import Results from './Results.js'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import config from '../../config.js';
import Header from '../Header'


const useStyles = theme =>({
  moneyDiv:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin: "10px 10px 0 0",
    padding: "5px 10px"
  },
  moneySign:{
    display:"inline-block",
    fontSize:"100px",
    margin:"0"
  },
  moneyInput:{
    display:"inline-block",
    textAlign:"center",
    backgroundColor:"white",
    color:"black",
    border:"none",
    outline:"none",
    transition:"height 1s",
    "-webkit-transition":"height 1s",
    height:"100px",
    fontSize:"100px"
  },
  darkMoneyInput:{
    display:"inline-block",
    textAlign:"center",
    backgroundColor:"rgb(24, 26, 27)",
    color:"white",
    border:"none",
    outline:"none",
    transition:"height 1s",
    "-webkit-transition":"height 1s",
    height:"100px",
    fontSize:"100px"
  },
  mainDiv:{
    alignItems:"center",
    justifyContent:"center",
    display:"block",
    position:"relative",
    textAlign:"center"
  },
  tickerInput:{
    textAlign:"center",
    fontSize:"3em",
    textTransform:"uppercase"
  },
  loadingIcon:{
    position:"fixed",
    right:"50%",
    top:"50%",
  },
  titles:{
    fontSize:"50px",
    marginTop:"10px",
    marginBottom:"10px",
  },
  lightButtonStyle:{
    backgroundColor:"#d4ebf2",
    fontWeight:"bold",
    color:"black",
    width:"300px",
    fontSize:"20px"
  },
  darkButtonStyle:{
    backgroundColor:"rgb(20, 54, 65)",
    fontWeight:"bold",
    color:"white",
    width:"300px",
    fontSize:"20px"
  }
})

class FOMO extends Component {
  constructor(props){
    super(props);
    this.state = {
      show_input:true,
      ticker:"",
      amt:1000,
      stock_data:{},
      av_error:false,
      money_length:4,
      nightModeChecked:false
    }
    this.getStock = this.getStock.bind(this);
  }

  componentDidMount=()=>{
    let list_of_default_stocks=["TSLA", "GME", "PLTR", "FB", "BB", "MSFT", "AMZN", "F", "GM", "BABA"]
    let rand_stock = Math.floor(Math.random()*list_of_default_stocks.length)
    this.setState({
      ticker: list_of_default_stocks[rand_stock]
    })
  }
  async getStock(){ 
    let stock_data = {};
    await axios.get(config.config.backend_url+"getStockData?ticker="+this.state.ticker)
     .then((stock_response)=>{
      stock_data = JSON.parse(stock_response.data.response)
      this.setState({
        stock_data:stock_data
      })
     })
     .catch((err)=>{
      this.setState({
        av_error:true,
        show_input:true
      });
    })
  } 

  switchNightMode=(nightModeIndicator)=>{
    this.setState({
      nightModeChecked:nightModeIndicator
    })
  }

  render(){
      const {classes} = this.props
      let backgroundStyle = this.state.nightModeChecked?"rgb(24, 26, 27)":"white"
      document.body.style.backgroundColor=backgroundStyle
      let darkText = {
          color:"white"
      }
      let lightText={
          color:"black"
      }
      let textColor = this.state.nightModeChecked?darkText:lightText
      let moneyInputStyle = this.state.nightModeChecked?classes.darkMoneyInput:classes.moneyInput
      let buttonStyle = this.state.nightModeChecked?classes.darkButtonStyle:classes.lightButtonStyle
    return(
      <React.Fragment>
        <Header onSwitchNightMode={this.switchNightMode}/>
        {this.state.show_input &&
          <form onSubmit={this.handleSubmit}>
            <div className ={classes.mainDiv}>
              <h1 className={classes.titles} style={textColor}>HOW MUCH IS A</h1>
              <div className={classes.moneyDiv}>
                <h1 className={classes.moneySign} style={textColor}>$</h1>
                <input 
                  value ={this.state.amt} 
                  onChange={this.updateAmt}
                  className={moneyInputStyle}
                  maxLength="4"
                  size={this.state.money_length +1}
                  type="text"
                  autoFocus="autofocus"
                />
              </div>
              <h1 className={classes.titles} style={textColor}> INVESTMENT IN </h1>          
                <input className={classes.tickerInput}
                type="text" 
                onChange={this.setTicker} 
                maxLength="5"
                size="9"
                value={this.state.ticker}/>
              <h1 className={classes.titles} style={textColor}> WORTH NOW? </h1>
              {(this.state.amt==undefined || this.state.ticker=="") &&
                  <h1 style={textColor}>Please pick a valid amount and stock</h1>
              }
              {this.state.amt!=undefined && this.state.ticker!="" &&
                <Button className={buttonStyle} type="submit" variant="contained" color="primary" onClick={this.getStock} >
                  SHOW ME THE MONEY
                </Button>
              }
            </div>
          </form>
        }
        {!this.state.show_input && this.state.stock_data &&
          <div className={classes.mainDiv}>       
            <Results
              resetFOMO={this.resetFOMO}
              ticker={this.state.ticker}
              amt={this.state.amt}
              stock_data={this.state.stock_data}
              nightModeChecked={this.state.nightModeChecked}
              />
          </div>
        }
        {this.state.av_error &&
          <h1 style={{...{textAlign:"center"},...textColor}}>
              Error getting stock data. Make sure to input a valid ticker.
          </h1>
        }
        {!this.state.show_input && !this.state.av_error && Object.keys(this.state.stock_data).length<=0 &&  
          <CircularProgress className={classes.loadingIcon} size="50px" style={textColor}/>
        }
        
      </React.Fragment>
    );
  }
  updateAmt=(evt)=>{
    let amount = evt.target.value;

    if(!isNaN(amount) && Number(amount) > 0){
      this.setState({
          money_length:amount.length,
          amt:amount
      });
    }else{
      this.setState({
          money_length:amount.length,
          amt:undefined
      });
    }
  }
  setTicker=(event)=>{
    let capital_value =  event.target.value.toUpperCase()
    this.setState({
      ticker:capital_value
    })
  }
  handleSubmit = (event) =>{
      event.preventDefault();
      this.getStock();
      this.setState({
        show_input:false,
        av_error:false
      });
  }
  resetFOMO =()=>{
    this.setState({
        show_input:true,
        amt:1000,
        stock_data:{},
        av_error:false,
        money_length:4
    });
    let list_of_default_stocks=["TSLA", "GME", "PLTR", "FB", "BB", "MSFT", "AMZN", "F", "GM", "BABA"]
    let rand_stock = Math.floor(Math.random()*list_of_default_stocks.length)
    this.setState({
      ticker: list_of_default_stocks[rand_stock]
    })
  }
}

export default withStyles(useStyles)(FOMO);
