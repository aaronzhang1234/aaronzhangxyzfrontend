import React,{Component} from 'react';
import axios from 'axios';
import Results from './Results.js'
import MoneyBar from './MoneyBar.js'
import '../../css/FOMO.css';
import Button from '@material-ui/core/Button';
import config from '../../config.js';

class FOMO extends Component {
  constructor(props){
    super(props);
    this.state = {
      show_input:true,
      ticker:"",
      amt:1000,
      stock_data:{},
      av_error:false
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
      stock_data = stock_response.data
      this.setState({
        stock_data:stock_data
      })
     })
     .catch((err)=>{
      this.setState({
        av_error:true
      });
    })

  } 
  render(){
    return(
      <div className="App">
        <header className="App-header">
            <form onSubmit={this.handleSubmit}>
          <div 
           className ={this.state.show_input ? "input_div" : "hidden"}>
            <h1>HOW MUCH IS A</h1>
              <MoneyBar sendAmt={this.getAmt}/>
            <h1> INVESTMENT IN </h1>          
              <input id="tickerInput" 
               type="text" 
               onChange={this.setTicker} 
               maxLength="4"
               size="9"
               value={this.state.ticker}/>
            <h1> WORTH NOW? </h1>
            <div
              className ={this.state.amt==null || this.state.ticker==null ? "" : "hidden"}>
               <h1>Please pick a valid amount and stock</h1>
            </div>
            {
            <Button type="submit" variant="contained" color="primary" onClick={this.getStock} >
              SHOW ME THE MONEY
            </Button>
            }
          </div>
            </form>
            {
          <div
            className= {!this.state.show_input && this.state.stock_data? "results-div":"hidden"}>       
            <Results
              ticker={this.state.ticker}
              amt={this.state.amt}
              stock_data={this.state.stock_data}
              av_error={this.state.av_error}/>
          </div>
            }
        </header>
      </div>
    );
  }
  getAmt=(amt)=>{
    this.setState({
      amt:amt
    })
  }
  handleSubmit = (event) =>{
      event.preventDefault();
      this.getStock();
      this.setState({
        show_input:false
      });
  }
  getTicker=(ticker)=>{
    this.setState({
      ticker:ticker
    })
  }
  setTicker=(event)=>{
    this.setState({
      ticker:event.target.value
    })
  }
}

export default FOMO;
