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
  Button
} from "reactstrap";
import "./Menu.css";
import "react-tabs/style/react-tabs.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Menu extends Component {
  photos = [];
  visitors=[];
  families = [];

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

    this.visitors = props.visitors.map(visitor => {
      return (
        <div className="comments">
            <div className="headComment">
              <img
                src="../person_images/photos/animal-prints.png"
                className="foot"
                alt="footImage"
              />
              <strong>{visitor.name}</strong>
            </div>
            <hr className="hrs" />
            <div className="bodyComment">
              <img
                src={visitor.profileImg}
                className="proImg"
                alt="profileImg"
              />
              {visitor.comments}
            </div>
          </div>
      );
    })

    this.families = props.families.map(family => {
      return (
        <div className="div-body">
            <div className="div-container">
              <div className="div-outer">
                <div className="div-inner">
                  <div className="parents">
                    <img src={family.father.url} className="parents-img" alt="" />
                    <img src={family.mother.url} className="parents-img" alt="" />
                  </div>
                  <div className="child">
                    {family.children.map(child => {  
                      return <img src={child.url} className="child-img" alt="" />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    })
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
      menuState = (
      <div className="families">
        {this.families}
      </div>
      );
    } else {
      menuState = (
        <div className="visitors">
          <div>
            <input type="textarea" className="visitorsInput" />
            <Button color="success">글남기기</Button>
          </div>
          {this.visitors}
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
            <ToggleButton value="visitors">GuestBook</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        {menuState}
      </div>
    );
  }
}

export default Menu;
