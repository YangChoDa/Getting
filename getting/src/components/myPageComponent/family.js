import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./family.css";

export default class family extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>my pet 1</Tab>
          <Tab>my pet 2</Tab>
        </TabList>
        <TabPanel>
          <div className="div-body">
            <div className="div-container">
              <div className="div-outer">
                <div className="div-inner">
                  <div className="parents">
                    <img src="./images/pat1.png" className="parents-img" />
                    <img
                      src="./person_images/photos/dog10.jpg"
                      className="parents-img"
                    />
                  </div>
                  <div className="child">
                    <img
                      src="./person_images/photos/dog4.jpg"
                      className="child-img"
                    />
                    <img
                      src="./person_images/photos/dog6.jpg"
                      className="child-img"
                    />
                    <img
                      src="./person_images/photos/dog8.jpg"
                      className="child-img"
                    />
                    <img
                      src="./person_images/photos/dog9.jpg"
                      className="child-img"
                    />
                  </div>
                </div>
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
