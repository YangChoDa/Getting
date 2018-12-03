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
        url: "./person_images/photos/b1.jpg",
        description: "귀귀귀요미 일상"
      },
      { url: "./person_images/photos/b2.jpg", description: "오랫만에 가족나들이" },
      { url: "./person_images/photos/b3.jpg", description: "요즘 대세가 미니언즈라지?" },
      {
        url: "./person_images/photos/b4.jpg",
        description: "자다 일어나서"
      },
      { url: "./person_images/photos/b5.jpg", description: "즉등히흐라" },
      { url: "./person_images/photos/b7.jpg", description: "개껌~" },
      { url: "./person_images/photos/b9.jpg", description: "바람이....." },
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
        father: { url: "./images/bishong1.png", name: "설탕" },
        mother: { url: "./person_images/photos/bishong2.jpg", name: "숑이" },
        children: [
          { url: "./person_images/photos/bs1.jpg", name: "아롱이" },
          { url: "./person_images/photos/bs2.jpg", name: "다롱이" },
          { url: "./person_images/photos/bs3.jpg", name: "새롱이" },
          { url: "./person_images/photos/bs4.jpg", name: "메롱이" }
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
              <Tab>설탕</Tab>
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
