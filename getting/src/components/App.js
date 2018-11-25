import React, { Component } from "react";
import Person from './personComponents/Person';

class App extends Component {
    render() {
      return (
        <div className="ui container">
            <Person></Person>
        </div>
      );
    }
  }
  
  export default App;