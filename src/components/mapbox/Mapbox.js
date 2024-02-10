import React,{Component} from 'react';
import Header from '../Header.js'

class Mapbox extends Component {
    constructor(props){
          super(props)
    }
    render(){
        return(
            <React.Fragment>
                <Header
                    onSwitchNightMode={this.switchNightMode}
                />
                <h1>memes</h1>
            </React.Fragment>
        )
    }
}
export default(Mapbox);