import React, { Component } from "react";
import "./profile.css";
import SelfModal from "./selfModal";
import {Link} from 'react-router-dom';

class Profile extends Component {
  likes = [];

  constructor(props) {
    super(props);
    // this.state = {
    //   buttonLabel: "Edit Profile",
    //   className: "btn btn-danger"
    // }

    this.likes = props.likes.map(like => {
      return (
        <div className="likeInfo">
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
      <div className="profile">
      <SelfModal />
        <div className="profileImg">
          <img src="./images/pat1.png" className="profile-img" alt=""/>
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
