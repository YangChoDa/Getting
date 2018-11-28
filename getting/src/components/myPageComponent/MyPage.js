import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
//import './profile';

export default class MyPage extends Component {
  render() {
    const tabList = () => {
      return (
        <Tabs>
          <TabList>
            <Tab>my pet 1</Tab>
            <Tab>my pet 2</Tab>
          </TabList>

          <TabPanel>
            <div className="pat1">
              <div className="profile">
                <img src="./images/pat1.png" className="profile-img" />
              </div>
              <h2>Any content 1</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>  
      );
  }

  const buttonList = () => {
    return (
      <div>
        <button>Diaries</button>
        <button>family</button>
        <button>guestBook</button>
        <button>edit Profile</button>
      </div>
    );
  }

    return (
      <div>
        {tabList()}
        {buttonList()}
      </div>
    );
  }
}
