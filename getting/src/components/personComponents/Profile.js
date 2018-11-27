import React, { Component } from "react";
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <div className="profileImg">
          <img src="./images/pat1.png" className="profile-img" />
        </div>
        <div className="profileInfo">
          <p>견종 : 포메라니안</p>
          <p>나이 : 2살</p>
          <p>성별 : 여</p>
        </div>
      </div>
    );
  }
}

export default Profile;
