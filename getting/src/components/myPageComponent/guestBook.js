import React, { Component } from 'react';
import { Button } from "reactstrap";

export default class guestBook extends Component {
  state = {
    visitors: [
      {
        profileImg: "./person_images/photos/dog8.jpg",
        name: "다니",
        comments: "사진 잘 보고 가요!!"
      },
      {
        profileImg: "./person_images/photos/dog9.jpg",
        name: "초롱이",
        comments: "강아지가 너무 이쁘네요~잘보고 갑니다^^"
      },
      {
        profileImg: "./person_images/photos/dog6.jpg",
        name: "쫑아",
        comments: "너무 귀여워요 ㅠㅠ"
      }
    ]
  }

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