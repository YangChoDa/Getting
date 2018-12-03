import React, { Component } from "react";
import "./selfModal.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../mainComponents/Login.css";

class selfModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "1111",
      thick: ["포메라니안", "푸들", "", "", ""],
      age: "2"
    };
  }

  openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  handleChange() {
    const file = document.getElementById("up");
    const imgTag = document.getElementById("previewImg");

    let reader = new FileReader();

    reader.onload = function(e) {
      imgTag.setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(file.files[0]);
  }

  triggerInputFile = () => this.fileInput.click();

  render() {
    return (
      <div>
        <Button onClick={this.openModal} outline color="warning">
          프로필 수정
        </Button>

        <div id="myModal" class="modal">
          <div class="modal-content" id="modalContent">
            <span class="close" onClick={this.closeModal}>
              &times;
            </span>

            <div class="contents" class="con2">
              <div class="loginBox">
                <div class="picture">
                  <input
                    type="file"
                    id="up"
                    class="file1"
                    ref={fileInput => (this.fileInput = fileInput)}
                    onChange={this.handleChange}
                  />
                  <img
                    src="./images/1.png"
                    className="profile-img"
                    id="previewImg"
                    onClick={this.triggerInputFile}
                  />
                  <center>
                    <p>Introduce Your Doggy</p>
                  </center>
                  <div class="paper">
                    <div class="paper-content">
                      <textarea class="note" autoFocus />
                    </div>
                  </div>
                </div>

                <div class="dogP">
                  <form action="#" method="post">
                    <div class="Input">
                      <input
                        type="text"
                        Name="Name"
                        placeholder="Name"
                        required=""
                      />
                      <label />
                    </div>
                    <div class="Input">
                      <input
                        type="text"
                        Name="Thick"
                        placeholder="Thick"
                        required=""
                      />
                      <label />
                    </div>
                    <div>
                      <div>
                        <p>Gender</p>
                      </div>
                      <div class="gender-selector">
                        <input
                          id="male"
                          type="radio"
                          name="gender"
                          value="male"
                        />
                        <label class="gender male" for="male" />
                      </div>
                      <div class="gender-selector">
                        <input
                          id="female"
                          type="radio"
                          name="gender"
                          value="female"
                        />
                        <label class="gender female" for="female" />
                      </div>
                    </div>
                    <p>Date of Birth:</p>
                    <div class="Input">
                      <input
                        class="date"
                        type="date"
                        id="start"
                        name="trip-start"
                      />
                      <label />
                    </div>
                    <div class="Input">
                      <input
                        type="text"
                        name="Email"
                        placeholder="Email"
                        required=""
                      />
                      <label />
                    </div>
                    <div class="Input">
                      <input
                        Name="Password"
                        placeholder="Password"
                        required=""
                      />
                      <label />
                    </div>
                    <button class="signupB"> Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default selfModal;
