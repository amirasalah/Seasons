import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from './SeasonsDisplay';
import ErrorMessage from './ErrorMessage';
import Laoding from './Loading';
class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            latitude: '',
            longitude: '',
            errorMsg: ''
        }
    }

    render() {
        if (this.state.errorMsg) {
            return (
                <ErrorMessage error={this.state.errorMsg} />
            )
        }
        else if (!this.state.latitude || !this.state.longitude) {
            return (
                <Laoding />
            )
        }
        else {
            return (
                <SeasonsDisplay
                    latitude={this.state.latitude}
                    longitude={this.state.longitude} />
            )
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            success => {
                this.setState({
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude
                })
            },
            error => {
                this.setState({
                    errorMsg: error.message
                })
            },
        );
    }
}
ReactDOM.render(< App />, document.getElementById("root"));
