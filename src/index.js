import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //js function, NOT react
  constructor(props) {
    //pass props to base class (react.component)
    //mandatory!!!
    super(props);

    //this is the ONLY TIME we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      // dont do this!!!
      // this.state.lat = position.coords.latitude
      err => console.log(err)
    );
  }

  //we have ot define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
