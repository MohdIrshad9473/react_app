import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
class App extends React.Component {
        state = {lat: null, errorMessage:''};
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err =>this.setState({errorMessage:err.message})
            
        );
        
       


    }
    

    render(){
        return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>  
       
    }
    
};

ReactDom.render(
    <App /> ,
    document.querySelector('#root')
);