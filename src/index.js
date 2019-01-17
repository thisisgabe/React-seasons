import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //js function, NOT react

  //equivalent to using constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      // dont do this!!!
      // this.state.lat = position.coords.latitude
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  //we have ot define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
