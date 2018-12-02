import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Menu extends Component {
  photos = [];

  constructor(props) {
    super(props);
    this.photos = props.photos.map(photo => {
      return (
        <div className="cards">
          <Card>
            <CardImg
              top
              width="100%"
              height="300px"
              src={photo.url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle><strong>좋아요</strong> </CardTitle>
              <CardText className="diary-comments">
                {photo.description}
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    this.state = {
      menuBtn: "diaries"
    };
  }

  setValue = e => {
    this.setState({ menuBtn: e });
    // this.state = {menuBtn:e};
  };

  render() {
    let menuState;
    if (this.state.menuBtn === "diaries") {
      menuState = <div className="diaries">{this.photos}</div>;
    } else if (this.state.menuBtn === "families") {
      menuState = <div className="families" />;
    } else {
      menuState = (
        <div className="visitors">
          <div>
            <input type="textarea" className="visitorsInput" />
            <Button color="success">글남기기</Button>
          </div>
          <div className="comments">
            <div className="headComment">
              <img
                src="./person_images/photos/animal-prints.png"
                className="foot"
              />
              <strong>양초다</strong>
            </div>
            <hr className="hrs" />
            <div className="bodyComment">
              <img
                src="./person_images/photos/profileTest.jpg"
                className="proImg"
              />
              사진들 잘 보고갑니다~~
            </div>
          </div>
        </div>
      );

    }
    return (
      <div className="menus">
        <ButtonToolbar>
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue="diaries"
            onChange={this.setValue}
          >
            <ToggleButton value="diaries">Diary</ToggleButton>
            <ToggleButton value="families">Family</ToggleButton>
            <ToggleButton value="visitors">방명록</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        {menuState}
      </div>
    );
  }
}

export default Menu;
