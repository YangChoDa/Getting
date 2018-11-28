import React, { Component } from "react";
//import Person from './personComponents/Person';
import MyPage from './myPageComponent/MyPage';

class App extends Component {
    render() {
      return (
        <div className="ui container">
            <MyPage></MyPage>
        </div>
      );
    }
  }
  
  export default App;