import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import Results from './Results.js'
import SearchBar from './SearchBar.js'
import MoneyBar from './MoneyBar.js'
import '../../css/App.css';
import config from '../../config.js'

class FOMO extends Component {
  constructor(props){
    super(props);
    this.state = {
      show_input:true,
      ticker:null,
      amt:1000,
      stock_data:{},
      av_error:false,
      quandl_error:false,
      redirect:false
    }
    this.getStock = this.getStock.bind(this);
  }
  async getStock(){ 
    let stock_data = {};
    let stock_response = await axios.get(config.config.backend_url+"GetStockData?"+this.state.ticker).catch((err)=>{
      this.setState({
        av_error:true
      });
    })

    stock_data = stock_response.data
    this.setState({
      stock_data:stock_data
    })
  } 
  render(){
    if(this.state.redirect == true){
        return <Redirect to={{pathname:'/results'}}/>
    }
    return(
      <div className="App">
        <header className="App-header">
            <form onSubmit={this.handleSubmit}>
          <div 
           className ={this.state.show_input ? "input_div" : "hidden"}>
            <h1>HOW MUCH IS A</h1>
              <MoneyBar sendAmt={this.getAmt}/>
            <h1> INVESTMENT IN </h1>
              <SearchBar sendTicker={this.getTicker}/>            
            <h1> WORTH NOW? </h1>
            <div
              className ={this.state.amt==null || this.state.ticker==null ? "" : "hidden"}>
               <h1>Please pick a valid amount and stock</h1>
            </div>
            
            {
            <button 
              className ={this.state.amt==null || this.state.ticker==null ? "hidden" : ""}
              onClick={this.getStock}>
              Press Button for Stock
            </button>
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
              av_error={this.state.av_error}
              quandl_error={this.state.quandl_error}/>
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
      /*
      this.setState({
          redirect:true
      })
      */
      this.setState({
        show_input:false
      });
  }
  getTicker=(ticker)=>{
    this.setState({
      ticker:ticker
    })
  }
}

export default FOMO;
