import React, { Component } from "react";
import Profile from './Profile';

class Person extends Component {
  constructor(props) {
    super(props);
  }
  render(){
      return (
          <div>
              <Profile></Profile>
          </div>
      )
  }
}

export default Person;