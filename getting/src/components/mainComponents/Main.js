import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import "./Main.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        {
          url: "./person_images/photos/bishong1.png",
          name: "설탕",
          gender: "./person_images/photos/male.png",
          thick: "비숑",
          age: "4살"
        },
        {
          url: "./person_images/photos/mal2.jpg",
          name: "콩이",
          gender: "./person_images/photos/female.png",
          thick: "말티즈",
          age: "6살"
        },
        {
          url: "./person_images/photos/dog4.jpg",
          name: "코코",
          gender: "./person_images/photos/male.png",
          thick: "포메라니안",
          age: "3살"
        },
        {
          url: "./person_images/photos/siba1.jpg",
          name: "세리",
          gender: "./person_images/photos/female.png",
          thick: "시바견",
          age: "2살"
        },
        {
          url: "./person_images/photos/golden1.jpg",
          name: "베일리",
          gender: "./person_images/photos/female.png",
          thick: "골든리트리버",
          age: "2살"
        },
        {
          url: "./person_images/photos/siba2.jpg",
          name: "보리",
          gender: "./person_images/photos/male.png",
          thick: "시바견",
          age: "5살"
        },
        {
          url: "./person_images/photos/daks2.jpg",
          name: "초코",
          gender: "./person_images/photos/male.png",
          thick: "닥스훈트",
          age: "3살"
        },
        {
          url: "./person_images/photos/dog7.jpg",
          name: "똘이",
          gender: "./person_images/photos/female.png",
          thick: "포메라니안",
          age: "4살"
        },
        {
          url: "./person_images/photos/daks1.jpg",
          name: "까미",
          gender: "./person_images/photos/female.png",
          thick: "닥스훈트",
          age: "3살"
        },
        {
          url: "./person_images/photos/golden2.jpg",
          name: "루키",
          gender: "./person_images/photos/male.png",
          thick: "골든리트리버",
          age: "3살"
        },
        {
          url: "./person_images/photos/mal1.jpg",
          name: "우디",
          gender: "./person_images/photos/male.png",
          thick: "말티즈",
          age: "5살"
        },
        {
          url: "./person_images/photos/bishong2.jpg",
          name: "숑이",
          gender: "./person_images/photos/female.png",
          thick: "비숑",
          age: "2살"
        }
      ]
    };
  }

  checkAll() {
    const thick = document.getElementById("thick");
    const gender = document.getElementById("gender");
    const age = document.getElementById("age");
    const all = document.getElementById("all");

    if (all.checked === true) {
      thick.checked = false;
      gender.checked = false;
      age.checked = false;
    } else {
      thick.checked = true;
      gender.checked = true;
      age.checked = true;
    }
  }

  render() {
    return (
      <PageTemplate>
        <div class="chkBox">
          <input name="chk_list" type="checkbox" id="age" />
          <label for="age" class="check" onClick={this.cancelCheck}>
            나이
          </label>
          <input name="chk_list" type="checkbox" id="gender" />
          <label for="gender" class="check" onClick={this.cancelCheck}>
            성별
          </label>
          <input name="chk_list" type="checkbox" id="thick" />
          <label for="thick" class="check" onClick={this.cancelCheck}>
            견종
          </label>
          <input name="chk_all" type="checkbox" id="all" />
          <label for="all" class="check" onClick={this.checkAll}>
            전체
          </label>
        </div>
        <div className="card-container">
          {this.state.photos.map((photo, i) => {
            return (
              <div className="cardList" key={i}>
                <Card>
                  <CardImg
                    className="cardImg"
                    src={photo.url}
                    alt="Card image cap"
                  />

                  <CardBody>
                    <CardTitle>
                      이름: {photo.name}{" "}
                      <img src={photo.gender} className="genderImage" />
                    </CardTitle>
                    <CardText>
                      <p class="text1">
                        견종: {photo.thick} 나이: {photo.age}
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        >>>>>>> 69a423688f7b6a56bf9b3f059de7693c1402f60c
      </PageTemplate>
    );
  }
}

export default Login;
