import React from "react";

const GreetingInput = (props) => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Type a planet name"
        onChange={(event) => {
          props.renderGreeting(event.target.value);
        }}
      />
    </React.Fragment>
  );
};

export default GreetingInput;
