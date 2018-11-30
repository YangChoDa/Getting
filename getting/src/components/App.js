import React, { Component } from "react";
import MyPage from './myPageComponent/MyPage';

import Person from './personComponents/Person';
import Login from './mainComponents/Login';

import './App.css';

class App extends Component {
    render() {
      return (
        <div className="ui container">
            {/* <MyPage></MyPage> */}
            <Login></Login>
           {/* <Person></Person> */}
        </div>
      );
    }
  }
  
  export default App;