import React, { Component } from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PageTemplate from "../common/PageTemplate/PageTemplate";

import "react-tabs/style/react-tabs.css";
import "./Person.css";

class Person extends Component {
  state = {
    photos: [
      {
        url: "./person_images/photos/dog1.jpg",
        description: "귀귀귀요미 일상"
      },
      { url: "./person_images/photos/dog2.jpg", description: "뭘 원하니" },
      { url: "./person_images/photos/dog3.jpg", description: "햇살 쨍쨍" },
      {
        url: "./person_images/photos/dog4.jpg",
        description: "간식준다니 헤헿"
      },
      { url: "./person_images/photos/dog5.jpg", description: "잠온다아ㅏ" },
      { url: "./person_images/photos/dog6.jpg", description: "카페왔다ㅏ" },
      { url: "./person_images/photos/dog7.jpg", description: "친구왔다ㅏ" },
      { url: "./person_images/photos/dog8.jpg", description: "심심해ㅐ" },
      { url: "./person_images/photos/dog9.jpg", description: "뀨옹" },
      { url: "./person_images/photos/dog10.jpg", description: "졸려ㅕ" }
    ],
    likes: [
      { url: "./person_images/photos/dog8.jpg", name: "양", gender: "남" },
      { url: "./person_images/photos/dog9.jpg", name: "초", gender: "남" },
      { url: "./person_images/photos/dog6.jpg", name: "다", gender: "남" }
    ]
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageTemplate>
        <div className="personPage">
          <Tabs>
            <TabList>
              <Tab>인절미</Tab>
            </TabList>
            <TabPanel>
              <div className="patInfo">
                <Profile likes={this.state.likes} />
                <Menu photos={this.state.photos} />
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </PageTemplate>
    );
  }
}

export default Person;
