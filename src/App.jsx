import React, { useState, useEffect } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

const App = () => {
  const [planet, setPlanet] = useState();

  useEffect(()=> {
    setPlanet('Venus')
  }, [])

  
  return (
    <React.Fragment>
      <GreetingOutput planet={planet} />
      <GreetingInput renderGreeting={setPlanet} />
    </React.Fragment>
  );
};

export default App;

// import React, { Component } from "react";
// import GreetingInput from "./GreetingInput";
// import GreetingOutput from "./GreetingOutput";

// class App extends Component {
//   state = {
//     planet: "Venus",
//   };

//   renderGreeting(event) {
//     this.setState({ planet: event.target.value });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <GreetingOutput planet={this.state.planet} />
//         <GreetingInput renderGreeting={this.renderGreeting.bind(this)} />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
