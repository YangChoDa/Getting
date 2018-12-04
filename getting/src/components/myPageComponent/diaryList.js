import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import "./diaryList.css";

export default class diaryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diaries: [
        { url: "./person_images/photos/dog1.jpg", description: "귀귀귀요미 일상" },
        { url: "./person_images/photos/dog2.jpg", description: "뭘 원하니" },
        { url: "./person_images/photos/dog3.jpg", description: "햇살 쨍쨍" },
        { url: "./person_images/photos/dog4.jpg", description: "간식준다니 헤헿" },
        { url: "./person_images/photos/dog5.jpg", description: "잠온다아ㅏ" },
        { url: "./person_images/photos/dog6.jpg", description: "카페왔다ㅏ" },
        { url: "./person_images/photos/dog7.jpg", description: "친구왔다ㅏ" },
        { url: "./person_images/photos/dog8.jpg", description: "심심해ㅐ" },
        { url: "./person_images/photos/dog9.jpg", description: "뀨옹" },
        { url: "./person_images/photos/dog10.jpg", description: "졸려ㅕ" }
      ]
    };
  }

  render() {
    return (
      <div className="card-container" id="card-container">
        {this.state.diaries.map((diary, i) => {
          return (
            <div className="cardList" key={i}>
              <Card>
                <CardImg className="cardImg" src={diary.url} alt="Card image cap" />
                
                <CardBody>
                  <CardTitle>{diary.description}</CardTitle>
                  <CardText>
                    ddd
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
    );
  }
}
