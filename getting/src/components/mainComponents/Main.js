import React, { Component } from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";
import PageTemplate from "../common/PageTemplate/PageTemplate";
import "./Main.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        photos: [
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

  checkAll(){
    const thick = document.getElementById('thick');
    const gender = document.getElementById('gender');
    const age = document.getElementById('age');
    const all = document.getElementById('all');

    if(all.checked === true){
        thick.checked = false;
        gender.checked = false;
        age.checked = false;
    }else{
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
          <label for="age" class="check" onClick={this.cancelCheck}>나이</label>
          <input name="chk_list" type="checkbox" id="gender" />
          <label for="gender" class="check" onClick={this.cancelCheck}>성별</label>
          <input name="chk_list" type="checkbox" id="thick" />
          <label for="thick" class="check" onClick={this.cancelCheck}>견종</label>
          <input name="chk_all" type="checkbox" id="all" />
          <label for="all" class="check" onClick={this.checkAll}>전체</label>
      </div>
      <div className="card-container">
            {this.state.photos.map((photo, i) => {
              return (
                <div className="cardList" key={i}>
                  <Card>
                    <CardImg className="cardImg" src={photo.url} alt="Card image cap" />
                    
                    <CardBody>
                      <CardTitle>Card Title</CardTitle>
                      <CardText className="pTag">
                        {photo.description}
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
      </PageTemplate>
    );
  }
}

export default Login;