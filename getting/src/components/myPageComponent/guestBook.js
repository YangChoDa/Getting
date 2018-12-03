import React, { Component } from 'react';
import "./guestBook.css";

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
      {this.state.visitors.map((visitor, i) => {
        return(
          <div className="comments"  id="comments">
            <div className="headComment" id="headComment">
              <img src="../person_images/photos/animal-prints.png"
              className="foot" alt="" />
              <strong>{visitor.name}</strong>
            </div>
            <hr className="hrs" />
            <div className="bodyComment">
              <img src={visitor.profileImg} className="proImg" alt="" />
                {visitor.comments}
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}