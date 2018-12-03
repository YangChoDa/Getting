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
    ],
    visitors: [
      {
        profileImg: "./person_images/photos/dog8.jpg",
        name: "다니",
        comments: "사진 잘 보고 가요!!"
      },
      {
        profileImg: "./person_images/photos/dog9.jpg",
        name: "초롱이",
        comments: "강아지가 너무 이쁘네요~잘보고 갑니다^^"
      },
      {
        profileImg: "./person_images/photos/dog6.jpg",
        name: "쫑아",
        comments: "너무 귀여워요 ㅠㅠ"
      }
    ],
    families: [
      {
        father: { url: "./images/pat1.png", name: "인절미" },
        mother: { url: "./person_images/photos/dog10.jpg", name: "초롱이" },
        children: [
          { url: "./person_images/photos/dog6.jpg", name: "아롱이" },
          { url: "./person_images/photos/dog4.jpg", name: "다롱이" },
          { url: "./person_images/photos/dog8.jpg", name: "새롱이" },
          { url: "./person_images/photos/dog9.jpg", name: "메롱이" }
        ]
      }
    ]
  };
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
                <Menu photos={this.state.photos} visitors={this.state.visitors} families={this.state.families}  />
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
