import React, { useState, useEffect } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

const App = () => {
  const [planet, setPlanet] = useState();

  useEffect(() => {
    setPlanet("Venus");
  }, []);

  return (
    <React.Fragment>
      <GreetingOutput planet={planet} />
      <GreetingInput renderGreeting={setPlanet} />
    </React.Fragment>
  );
};

export default App;
