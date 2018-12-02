import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  likes = [];

  constructor(props) {
    super(props);
    this.likes = props.likes.map(like => {
      return (
        <div className="likeInfo">
          <img src={like.url} className="likeImg"></img>
          <strong>{like.name}</strong>({like.gender})
        </div>
      );
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="profileImg">
          <img src="./images/pat1.png" className="profile-img" />
        </div>
        <div className="profileInfo">
          <div className="profileInfoes">
            <p className="pStyle">견종 : 포메라니안</p>
            <p className="pStyle">나이 : 2살</p>
            <p className="pStyle">성별 : 여</p>
          </div>
          <hr className="hrs" />
          <div className="likes">
            <div className="boneImg">
              <img src="./person_images/bone.png" className="bone" />
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
