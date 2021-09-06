import React, { Component } from 'react'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     planet: 'Uranus'
  //   }
  // }
  state = {
    planet: 'Venus'
  }
  render() {
    //const planet = "Mars"
    const {planet} = this.state
    return (
      <div>
        <h1>Hello {planet} from class component</h1>
      </div>
    )
  }
}

export default App
