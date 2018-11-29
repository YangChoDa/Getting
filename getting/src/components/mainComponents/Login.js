import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabState: "SignIn"
    };
  }

  setTabState = (n) =>{
    this.setState({ tabState: n });
  }

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
            <button> Sign In</button>
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
      return(<div class="contents" class="con2">
        <div class='picture'>
          <input type='file' id='up' class='file1' ref={fileInput => this.fileInput = fileInput} />
          <img src="./images/1.png" className="profile-img" onClick={this.triggerInputFile} />
        </div>

        <div class='dogP'>
        <form action="#" method="post">
				<input type="text" Name="Name" placeholder="Name" required="" />
				<div class="radio-btns agileits w3layouts">
					<div class="cc-selector wthreeselector">
						<p>Gender</p>
					</div>
					<div class="cc-selector wthreeselector">
						<input id="visa" type="radio" name="credit-card" value="visa" />
						<label class="drinkcard-cc visa" for="visa"></label>
					</div>
					<div class="cc-selector wthreeselector">
						<input id="mastercard" type="radio" name="credit-card" value="mastercard" />
						<label class="drinkcard-cc mastercard" for="mastercard"></label>
					</div>
				</div>
				<div class="wthreedob">
					<input class="date agileits w3layouts" id="datepicker1" type="text" value="Date" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" required="" />
				</div>
				<input class="fill email" type="text" name="Email" placeholder="Email" required="" />
				<input type="password" Name="Password" placeholder="Password" required="" />
				<input class="fill tel" name="Phone" placeholder="Phone" required="" />
				<input type="text" Name="Customer ID" placeholder="Customer ID" required="" />
				<div class="send-button wthree agileits">
					<input type="submit" value="Sign Up" />
				</div>
			</form>
        </div>  
      </div>);
    }
  }

  tabView(){
    if(this.state.tabState === "SignIn"){
      return(
        <ul class="tab-group">
          <li class="tab active">
           <a onClick={()=>this.setTabState('SignIn')}>Sign In</a>
          </li>
          <li class="tab">
           <a onClick={()=>this.setTabState('SignUp')}>Sign Up</a>
          </li>
        </ul>
      );
    }else if(this.state.tabState === "SignUp"){
      return(
        <ul class="tab-group">
          <li class="tab">
           <a onClick={()=>this.setTabState('SignIn')}>Sign In</a>
          </li>
          <li class="tab active">
           <a onClick={()=>this.setTabState('SignUp')}>Sign Up</a>
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
