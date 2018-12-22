import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: '',
            longitude: '',
            errorMsg: ''
        }
        navigator.geolocation.getCurrentPosition(
            success => {
                this.setState({
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude
                })
            },
            error => {
                console.log(error);
                this.setState({
                    errorMsg: error.message
                })
            },
        );
    }
    render() {
        if (this.state.errorMsg) {
            return (
                <span>{this.state.errorMsg}</span>
            )
        }
        else if (!this.state.latitude || !this.state.longitude){
            return (
                <span>Loading ...</span>
            )
        }
        else{
            return (
                <div>
                    <strong>Latitude:</strong>  {this.state.latitude}
                    <br />
                    <strong>Longitude:</strong>  {this.state.longitude}
                    <br />
                </div>
            );
        }
        
    }
}
ReactDOM.render(< App />, document.getElementById("root"));
serviceWorker.register();