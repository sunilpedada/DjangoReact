import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render(){
  return(<div>
    <h1>hello</h1>
  </div>);
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);