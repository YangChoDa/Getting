import React, { Component } from "react";
import Person from './personComponents/Person';
import Login from './mainComponents/Login';

class App extends Component {
    render() {
      return (
        <div className="ui container">
            <Login></Login>
        </div>
      );
    }
  }
  
  export default App;