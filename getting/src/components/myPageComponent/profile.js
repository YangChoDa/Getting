import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class profile extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>my pet 1</Tab>
          <Tab>my pet 2</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="profile">
              <div className="profileImg">
                <img src="./images/pat1.png" className="profile-img" />
              </div>
              <div className="profileInfo">
                <p>견종 : 포메라니안</p>
                <p>나이 : 2살</p>
                <p>성별 : 여</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
  }
}
