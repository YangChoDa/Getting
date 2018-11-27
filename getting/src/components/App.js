import React, { Component } from "react";
import Person from './personComponents/Person';
import './App.css';

class App extends Component {
    render() {
      return (
        <div className="main">
            <Person></Person>
        </div>
      );
    }
  }
  
  export default App;