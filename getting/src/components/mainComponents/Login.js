import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabState: "SignIn"
    };
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

  setTabState = n => {
    this.setState({ tabState: n });
  };

  triggerInputFile = () => this.fileInput.click();

  showView() {
    if (this.state.tabState === "SignIn") {
      return (
        <div class="contents" class="con1">
          <center>
            <img src="./images/logo.png" className="logo-img" />
          </center>
          <form>
            <center>
              <div class="Input">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  required=""
                />
                <img src="./images/user.png" className="user-img" />
                <label />
              </div>
              <div class="Input">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required=""
                />
                <img src="./images/lock.png" className="lock-img" />
                <label />
              </div>
            </center>
            <Link to="/">
              <button> Sign In</button>
            </Link>
            <div class="social-signin">
              <button class="fb">
                <img src="./images/facebook.png" className="facebook-img" />
              </button>
              <button class="tw">
                <img src="./images/twitter.png" className="twitter-img" />
              </button>
            </div>
            <a href="#" class="lostpwd">
              Lost your password ?
            </a>
          </form>
        </div>
      );
    } else if (this.state.tabState === "SignUp") {
      return (
        <div class="contents" class="con2">
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
                <input type="text" Name="Name" placeholder="Name" required="" />
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
                  <input id="male" type="radio" name="gender" value="male" />
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
                <input class="date" type="date" id="start" name="trip-start" />
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
                <input Name="Password" placeholder="Password" required="" />
                <label />
              </div>

              <button class="signupB" onClick={()=>{
                this.setTabState("SignIn");
              }}> Sign Up</button>
            </form>
          </div>
        </div>
      );
    }
  }

  tabView() {
    if (this.state.tabState === "SignIn") {
      return (
        <ul class="tab-group">
          <li class="tab active">
            <a onClick={() => this.setTabState("SignIn")}>Sign In</a>
          </li>
          <li class="tab">
            <a onClick={() => this.setTabState("SignUp")}>Sign Up</a>
          </li>
        </ul>
      );
    } else if (this.state.tabState === "SignUp") {
      return (
        <ul class="tab-group">
          <li class="tab">
            <a onClick={() => this.setTabState("SignIn")}>Sign In</a>
          </li>
          <li class="tab active">
            <a onClick={() => this.setTabState("SignUp")}>Sign Up</a>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div class="loginBox">
        {this.tabView()}
        {this.showView()}
      </div>
    );
  }
}

export default Login;
