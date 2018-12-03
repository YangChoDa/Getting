import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
  likes = [];

  constructor(props) {
    super(props);
    this.likes = props.likes.map(like => {
      return (
        <div className="likeInfo">
          <div className="likeImgDiv">
            <Link to="/person">
              <img src={like.url} className="likeImg" />
            </Link>
          </div>
          <div className="likeInfoName">
            <strong>{like.name}</strong>
          </div>
        </div>
      );
    });

    this.state = {
      isLike:true
    }
  }

  add = () => {
    this.setState({isLike:!this.state.isLike});
    console.log(this.state.isLike);
    if(this.state.isLike){
      this.likes.push(
        <div className="likeInfo">
          <div className="likeImgDiv">
            <Link to="/person">
              <img src="./images/pat1.png" className="likeImg" alt="profile" />
            </Link>
          </div>
          <div className="likeInfoName">
            <strong>인절미</strong>
          </div>
        </div>
      );
    }else{
      this.likes.pop();
    }
    
  };

  render() {
    return (
      <div className="profile">
        <div className="profileImg">
          <img src="./images/bishong1.png" className="profile-img" />
        </div>
        <div className="profileInfo">
          <div className="profileInfoes">
            <p className="pStyle">견종 : 비숑</p>
            <p className="pStyle">나이 : 4살</p>
            <p className="pStyle">성별 : 남</p>
          </div>
          <hr className="hrs" />
          <div className="likes">
            <div className="boneImg">
              <Link to="/person">
                <img
                  src="./person_images/bone.png"
                  className="bone"
                  alt="like"
                  onClick={this.add}
                />
              </Link>
            </div>
            <div className="likeInfoes">{this.likes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
