import React, { Component } from "react";
import Profile from "./Profile";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Image } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="person_header">
          <a href="#">
            <img src="Logo.png" className="logo_img" />
          </a>
        </div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <button>+</button>
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
      </div>
    );
  }
}

export default Person;
