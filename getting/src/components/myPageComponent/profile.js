import React, { Component } from "react";
import "./profile.css";

import {Link} from 'react-router-dom';

class Profile extends Component {
  likes = [];

  constructor(props) {
    super(props);

    this.likes = props.likes.map(like => {
      return (
        <div className="mypagelikeInfo">
          <Link to="/person">
          <img src={like.url} className="likeImg" alt=""></img>
          </Link>
          <strong>{like.name}</strong>({like.gender})
        </div>
      );
    });
  }
  render() {

    return (
      <div className="mypageprofile">
        <div className="profileImg">
          <img src="./images/pat1.png" className="profile-img" alt=""/>
        </div>
        <div className="profileInfo">
          <div className="profileInfoes">
            <p className="pStyle">견종 : 포메라니안</p>
            <p className="pStyle">나이 : 2살</p>
            <p className="pStyle">성별 : 여</p>
            <p className="pStyle">소개 : blabla</p>
          </div>
          <hr className="hrs" />
          <div className="likes">
            <div className="boneImg">
              <img src="./person_images/bone.png" className="bone" alt=""/>
            </div>
            <div className="likeInfoes">
              {this.likes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
