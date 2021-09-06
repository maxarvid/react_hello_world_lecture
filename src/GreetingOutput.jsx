import React from 'react'

const GreetingOutput = (props) => {
  return (
    <React.Fragment>
      <h1>Hello {props.planet} from class component</h1>
    </React.Fragment>
  )
}

export default GreetingOutput
