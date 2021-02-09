import React,{Component} from 'react';
import accounting from 'accounting';
import '../../css/Results.css';
import TimeBar from './TimeBar.js';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import face_screaming from '../../imgs/fomo/face_screaming.png';
import loudly_crying from '../../imgs/fomo/loudly_crying.png';
import fear_full from '../../imgs/fomo/fear_full.png';
import pensive_face from '../../imgs/fomo/pensive_face.png';
import sleeping_face from '../../imgs/fomo/sleeping_face.png';
import relieved_face from '../../imgs/fomo/relieved_face.png';
import open_mouth from '../../imgs/fomo/open_mouth.png';
import heart_eyes from '../../imgs/fomo/heart_eyes.png';

class Results extends Component{
    constructor(props){
        super(props);
        this.state = {
            important_dates:{},
            from_date:null,
            to_date:null,           
            nightModeChecked:false
        }
    }
    componentDidUpdate=()=>{
        if(this.props.nightModeChecked!=this.state.nightModeChecked){
            this.setState({
                nightModeChecked:this.props.nightModeChecked
            })
        }
        if(Object.keys(this.state.important_dates).length<=0 && Object.keys(this.props.stock_data).length>=1){        
            this.findImportantDates();
        }
    }
    findImportantDates=(from_date_param)=>{
        let important_dates= {};
        let stock_data = this.props.stock_data;
        let dates = Object.keys(stock_data);
        important_dates["IPO"] = this.convert_string_to_date(dates[dates.length-1]);
        important_dates["CURRENT"] = this.convert_string_to_date(dates[0]);
        
        important_dates["HIGHEST"] = this.convert_string_to_date(this.getExtremes(1));
        important_dates["LOWEST"] = this.convert_string_to_date(this.getExtremes(0));
        
        let from_date = from_date_param?from_date_param:this.state.from_date;
        important_dates["NEXT_HIGHEST"] = this.convert_string_to_date(this.getExtremes(1, from_date));   
        important_dates["NEXT_LOWEST"] = this.convert_string_to_date(this.getExtremes(0, from_date));

        this.setState({
            important_dates:important_dates
        })
    }
    getExtremes = (type,after_date) =>{
        let stock_data = this.props.stock_data;
        let dates = Object.keys(stock_data);
        let current_date = dates[0]
        if(after_date){
            let after_index = this.findDateIndex(after_date);
            dates = dates.slice(0,after_index);
        }
        let extreme_stock_price = type>0?Math.max.apply(null, dates.map(function(x){return stock_data[x]})):
                                         Math.min.apply(null, dates.map(function(x){return stock_data[x]}));

        let extreme_match = dates.filter(function(y){return stock_data[y] === extreme_stock_price});    
        if(extreme_match[0]==undefined){
            return current_date
        }
        return extreme_match[0];
    }
    findDate = (props)=>{
        let date = props.date
        let textColor = props.textColor
        if(date!=null){
            let index = this.findDateIndex(date);

            let stock_data = this.props.stock_data;
            let dates = Object.keys(stock_data);

            let date_info = dates[index];           
            let price = stock_data[date_info];
            let rounded_price = Math.floor(price*100)/100;
            let price_formatted = accounting.formatMoney(rounded_price);

            let human_readable_date = moment(date).format("MMMM Do YYYY");
            return(
                <div className="date-results-div">
                    <h2 style={textColor}>On {human_readable_date}</h2>
                    <h2 style={textColor}>the price was</h2>
                    <h2 style={textColor}>{price_formatted}</h2>                
                </div>
            )
        }
        return(
            <React.Fragment>
                <CircularProgress style={textColor}/>
            </React.Fragment>
        )
    }
    findTotal =(textColor)=>{
        textColor = textColor.textColor
        let stock_data = this.props.stock_data;
        let dates = Object.keys(stock_data);

        let from_date = this.state.from_date;
        let to_date = this.state.to_date;
        if(from_date && to_date){
            let from_index = this.findDateIndex(from_date);
            let to_index = this.findDateIndex(to_date);
        
            let from_price = stock_data[dates[from_index]];
            let to_price = stock_data[dates[to_index]];
            let percentage_change = 0;
            let gain_loss = "Equal";
            let reaction_image = null;
            if(from_price> to_price){
                gain_loss = "loss";
                percentage_change = Math.round(((to_price - from_price)/from_price)*100);
                if (percentage_change<=-70){reaction_image = face_screaming};
                if (percentage_change>-70){reaction_image = loudly_crying};
                if (percentage_change>-50){reaction_image = fear_full};
                if (percentage_change>-20){reaction_image = pensive_face};
                if (percentage_change>-1){reaction_image = sleeping_face};
            }else{
                gain_loss = "gain";
                percentage_change = Math.round(((from_price - to_price)/from_price)*100)*-1;
                if (percentage_change>=100){reaction_image = heart_eyes};
                if (percentage_change<100){reaction_image = open_mouth};
                if (percentage_change<20){reaction_image = relieved_face};
                if (percentage_change<1){reaction_image = sleeping_face};
            }
            let percentage_string = percentage_change.toLocaleString();
            let amt_shares = Math.floor(this.props.amt/from_price*1000)/1000;
            let starting_money = amt_shares * from_price;
            let amt_string = amt_shares.toLocaleString();
            let total_money = Math.floor((amt_shares * to_price)*100)/100; 
            let total_money_formatted = accounting.formatMoney(total_money);
            let money_gained = accounting.formatMoney(total_money - starting_money);
            return(
                <div id="total-results">
                    <h1 style={textColor}> You would have: </h1>
                    <h1 style={textColor}>{amt_string} share(s) worth {total_money_formatted}</h1>
                    <h1 style={textColor}>
                        <img className = "reaction-images" src={reaction_image}/> 
                        A percentage {gain_loss} of {percentage_string}%
                        <img className = "reaction-images" src={reaction_image}/></h1>
                    <h1 style={textColor}>and a monetary {gain_loss} of {money_gained}</h1>
                </div>
            )
        }
        return( 
            <h1 style={textColor} >Pick two valid dates</h1>
        )
    }
    render(){        
      let darkText = {
          color:"white"
      }
      let lightText={
          color:"black"
      }
      let textColor = this.state.nightModeChecked?darkText:lightText
        return(
            <React.Fragment>                
                {Object.keys(this.props.stock_data).length>0 &&
                    <div>
                        <h1 style={textColor}>If you invested {this.props.amt}  in {this.props.ticker}</h1>
                        <TimeBar
                            textColor={textColor}
                            important_dates={this.state.important_dates}
                            sendFrom = {this.getFrom}
                            sendTo = {this.getTo}
                            first_date = {this.state.important_dates["IPO"]}
                            last_date = {this.state.important_dates["CURRENT"]}
                        />                
                        <div id="dates-div">
                            <div id="from-results-div">
                                <this.findDate
                                    textColor={textColor}
                                    date ={this.state.from_date}
                                />
                            </div>
                            <div id="to-results-div">
                                <this.findDate
                                    textColor={textColor}
                                    date={this.state.to_date}
                                />
                            </div>
                        </div>
                        <this.findTotal textColor={textColor}/>
                    </div>
                }
            </React.Fragment>
        )
    }

    convert_string_to_date=(date)=>{
        let date_array = date.split("-");
        let month = Number(date_array[1])-1
        return(new Date(date_array[0], month, date_array[2]));
    }
    convert_date_to_string=(date)=>{
        let year = (date.getFullYear()).toString();
        let month = (date.getMonth()+1).toString();
        if(month.length<=1){
            month = "0"+month;
        }
        let day = (date.getDate()).toString();
        if(day.length<=1){
            day = "0"+day;
        }
        return ([year,month,day].join('-'));
    }
    getFrom=(from_date)=>{
        this.setState({
            from_date:from_date
        })
        this.findImportantDates(from_date);
    }
    getTo=(to_date)=>{
        this.setState({
            to_date:to_date
        })
    }
    findDateIndex=(date)=>{
        let date_string = this.convert_date_to_string(date);
        let stock_data = this.props.stock_data;
        let dates = Object.keys(stock_data);
        let match_index = -1;
        for(let i = 0; i<dates.length; i++){
            if(dates[i] == date_string){
                match_index = i;
                break;
            }
        }
        return(match_index);
    }
}
export default Results