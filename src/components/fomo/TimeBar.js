import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import DropDown from 'react-dropdown';
import moment from 'moment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-dropdown/style.css';

const useStyles =(theme)=>({
    dateHeaderStyle:{
        marginTop:"0px",
        fontSize:"25px",
    },
    controlDropdownStyle:{
        fontSize:"20px",
        height:"100%"
    },
    dropdownStyle:{
        height:"100%",
        width:"100%",
        [theme.breakpoints.up('md')]: {
            width:"95%"
        },
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    calendarItemStyle:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }

})

class TimeBar extends Component{
    constructor(props){
        super(props);
        this.state = {            
            from_date:null,
            from_label:null,
            to_date:null,
            to_label:null
        }
    }
    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
    render(){
        const from_options =[
            {value:this.props.important_dates["IPO"] ,label:"The IPO"},
            {value:this.props.important_dates["HIGHEST"] ,label:"The Absolute Highest"},
            {value:this.props.important_dates["LOWEST"] ,label:"The Absolute Lowest"}
        ]
        const to_options=[
            {value:this.props.important_dates["CURRENT"] ,label:"The Current Price"},
            {value:this.props.important_dates["NEXT_HIGHEST"] ,label:"The Next Highest"},
            {value:this.props.important_dates["NEXT_LOWEST"] ,label:"The Next Lowest"}
        ]
        const {classes} = this.props
        let textColor = this.props.textColor
        return(
            <React.Fragment>
                <Grid align-items="center" container>
                    <Grid align="center" item xs={6}>
                        <h1 className={classes.dateHeaderStyle} style={textColor}>At</h1>
                    </Grid>
                    <Grid align="center" item xs={6}>
                        <h1 className={classes.dateHeaderStyle} style={textColor}>and sold at</h1>
                    </Grid>
                </Grid>
                <Grid align-items="center" container>
                    <Grid align="center" item xs={6}>
                        <DropDown
                            className={classes.dropdownStyle}
                            controlClassName={classes.dropdownStyle}
                            options={from_options}                                                
                            value = {this.state.from_label}
                            placeholder="Select a date to begin"
                            onChange={this.handleFromChange}                        
                        /> 
                    </Grid>
                    <Grid align="center" item xs={6}>
                        <DropDown
                            className={classes.dropdownStyle}
                            controlClassName={classes.dropdownStyle}
                            value={this.state.to_label}
                            options={to_options}
                            placeholder="Select an ending date"
                            onChange={this.handleToChange}
                        /> 
                    </Grid>
                </Grid>
                <Grid align-items="center" container>
                    <Grid item xs={6}>
                        <Box className={classes.calendarItemStyle}>
                            <DateRangeIcon style={textColor}/>                    
                            <DatePicker
                                selected={this.state.from_date}                
                                onChange={this.handleFromChange}
                                minDate={this.props.first_date}
                                maxDate={this.props.last_date}
                                filterDate={this.isWeekday}
                                showYearDropdown
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.calendarItemStyle}>
                            <DateRangeIcon style={textColor}/>  
                            <DatePicker
                                selected={this.state.to_date}
                                onChange={this.handleToChange}
                                minDate={this.props.first_date}
                                maxDate={this.props.last_date}
                                filterDate={this.isWeekday}
                                showYearDropdown
                            />
                        </Box>

                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    handleFromChange=(date)=>{
        let from_date = date["value"]?date["value"]: date;
        let from_label = date["label"]?date["label"]:moment(date).format("MMMM Do YYYY");
        let to_date = this.state.to_date;
        this.props.sendFrom(from_date);
        if(from_date > to_date){
            this.setState({
                to_date:null,
                to_label:null
            })
            this.props.sendTo(null);
        }
        this.setState({
            from_date:from_date,
            from_label:from_label
        })
    }
    handleToChange=(date)=>{
        let to_date = date["value"]?date["value"]: date;
        let to_label = date["label"]?date["label"]:moment(date).format("MMMM Do YYYY");
        let from_date = this.state.from_date;
        if(from_date > to_date){
            this.setState({
                from_date:null,
                from_label:null
            })
            this.props.sendFrom(null);
        }
        this.setState({
            to_date:to_date,
            to_label:to_label
        })
        this.props.sendTo(to_date);
    }
}
export default withStyles(useStyles)(TimeBar);
