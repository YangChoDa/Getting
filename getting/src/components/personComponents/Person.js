import React, { Component } from "react";
import Profile from "./Profile";
import Menu from './Menu';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "./Person.css";

class Person extends Component {
  state = {
    photos: [
      {url:'./person_images/photos/dog1.jpg'},
      {url:'./person_images/photos/dog2.jpg'},
      {url:'./person_images/photos/dog3.jpg'},
      {url:'./person_images/photos/dog4.jpg'},
      {url:'./person_images/photos/dog5.jpg'},
      {url:'./person_images/photos/dog6.jpg'},
      {url:'./person_images/photos/dog7.jpg'},
      {url:'./person_images/photos/dog8.jpg'},
      {url:'./person_images/photos/dog9.jpg'},
      {url:'./person_images/photos/dog10.jpg'}
    ]
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personPage">
        <div className="person_header">
          <a href="#">
            <img src="Logo.png" className="logo_img" />
          </a>
        </div>
        <Tabs>
          <TabList>
            <Tab>인절미</Tab>
            <Tab>Title 2</Tab>
            <button>+</button>
          </TabList>
          <TabPanel>
            <div className="patInfo">
              <Profile/>
              <Menu photos={this.state.photos}/>
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
