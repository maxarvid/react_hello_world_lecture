import React, { Component } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

class App extends Component {
  state = {
    planet: "Venus",
  };

  renderGreeting(event) {
    this.setState({ planet: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <GreetingOutput planet={this.state.planet} />

        <GreetingInput renderGreeting={this.renderGreeting.bind(this)} />
      </React.Fragment>
    );
  }
}

export default App;
