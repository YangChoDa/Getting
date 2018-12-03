import React, { Component } from "react";
import Profile from "./profile";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "./Person.css";

class Person extends Component {
  state = {
    likes:[
      {url:'./person_images/photos/dog8.jpg',name:'양',gender:'남'},
      {url:'./person_images/photos/dog9.jpg',name:'초',gender:'남'},
      {url:'./person_images/photos/dog6.jpg',name:'다',gender:'남'}
    ]
  }

  render() {
    return (
      <div className="personPage">
        <Tabs>
          <TabList>
            <Tab>인절미</Tab>
          </TabList>
          <TabPanel>
            <div className="patInfo">
              <Profile likes={this.state.likes}/>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Person;
