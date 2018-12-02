import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class diaryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          url: "./person_images/photos/dog1.jpg",
          description: "귀귀귀요미 일상"
        },
        { url: "./person_images/photos/dog2.jpg", description: "뭘 원하니" },
        { url: "./person_images/photos/dog3.jpg", description: "햇살 쨍쨍" },
        {
          url: "./person_images/photos/dog4.jpg",
          description: "간식준다니 헤헿"
        },
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
      <div className="card-container">
        {this.state.photos.map((photo, i) => {
          return (
            <div className="cards" key={i}>
            <button>
              <Card>
                <CardImg
                  top
                  width="100%"
                  height="400px"
                  //src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  src={photo.url}
                  alt="Card image cap"
                />
                
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Card>
              </button>
            </div>
          )
        })}
      </div>
    );
  }
}
