import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="loginBox">
        <center>
        <img src="./images/logo.png" className="logo-img" />
        </center>
        <form>
          <center>
          <div class="Input">
          <input type="text" name="username" placeholder="username" required="" />
          <img src="./images/user.png" className="user-img" />
          <label></label>
          </div>
          <div class="Input">
          <input type="password" name="password" placeholder="password" required="" />
          <img src="./images/lock.png" className="lock-img" />
          <label></label>
          </div>
          </center>
          <button> Sign In</button>
        </form>
        <div class="social-signin">
          <button class="fb">
          <img src="./images/facebook.png" className="facebook-img" />
          </button>
          <button class="tw">
          <img src="./images/twitter.png" className="twitter-img" />
          </button>
        </div>
          <a href="#">Lost your password ?</a>
      </div>
    );
  }
}

export default Login;
