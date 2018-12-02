import React, { Component } from 'react';
import { Button } from "reactstrap";

export default class guestBook extends Component {
  render() {
    return (
      <div className="visitors">
        <div className="comments">
          <div className="headComment">
            <img src="./person_images/photos/animal-prints.png" className="foot" alt="" />
            <strong>양초다</strong>
          </div>
          <hr className="hrs" />
          <div className="bodyComment">
            <img src="./person_images/photos/profileTest.jpg" className="proImg" alt="" />
            사진들 잘 보고갑니다~~
            </div>
        </div>
      </div>
    )
  }
}