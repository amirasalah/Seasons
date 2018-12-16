import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: '',
            longitude: ''
        }
    }
    render() {
        navigator.geolocation.getCurrentPosition(
            success => {
                this.setState({
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude
                })
            },
            error => {
                console.log(error);
            },
        );
        return (<div> <strong>Latitude:</strong>  {this.state.latitude}, <strong>Longitude:</strong>  {this.state.longitude} </div>);
        }
    
    }
ReactDOM.render( < App /> , document.getElementById("root"));
serviceWorker.register();