import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src="Logo.png" className="logoImg" />
        </div>
        <div className="title"><h>Getting</h></div>
        <div className="menu">
          <div className="buttons">
            <Link to="/login"><Button color="secondary" outline className="logoutBtn">
              Logout
            </Button>
            </Link>
            <Link to="/mypage">
            <Button color="success" outline className="myPageBtn">
              MyPage
            </Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;