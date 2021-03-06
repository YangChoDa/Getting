import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./myPage.css";
import Profile from "./Person";
import Diaries from "./diaryList";
import Family from "./family";
import GuestBook from "./guestBook";
import PageTemplate from "../common/PageTemplate/PageTemplate";

export default class MyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuBtn: "profile"
    };
  }

  setValue = e => {
    console.log(e);
    this.setState({ menuBtn: e });
    // this.state = {menuBtn:e};
  };

  showView = () => {
    if (this.state.menuBtn === "profile") return <Profile />;
    if (this.state.menuBtn === "diaries") return <Diaries />;
    if (this.state.menuBtn === "family") return <Family />;
    if (this.state.menuBtn === "guestBook") return <GuestBook />;
  };

  render() {
    return (
      <PageTemplate>
        <div className="buttonList">
          <Button
            onClick={() => this.setValue("profile")}
            outline
            color="warning"
          >
            Profile
          </Button>
          <Button
            onClick={() => this.setValue("diaries")}
            outline
            color="primary"
          >
            Diaries
          </Button>
          <Button
            onClick={() => this.setValue("family")}
            outline
            color="secondary"
          >
            family
          </Button>
          <Button
            onClick={() => this.setValue("guestBook")}
            outline
            color="success"
          >
            guestBook
          </Button>
        </div>
        {this.showView()}
      </PageTemplate>
    );
  }
}
