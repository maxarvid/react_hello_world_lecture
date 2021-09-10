import React from 'react'

const GreetingOutput = (props) => {
  return (
    <React.Fragment>
      <h1 id="greeting">Hello {props.planet} from a functional component</h1>
    </React.Fragment>
  )
}

export default GreetingOutput
