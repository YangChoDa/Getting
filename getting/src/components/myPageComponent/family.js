import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./family.css";

export default class family extends Component {
  constructor(props) {
    super(props);

    this.state = {
      families: [
        {
          url: './images/pat1.png',
          family_type: 'father',
          name: '인절미',
        },
        {
          url: './person_images/photos/dog10.jpg',
          family_type: 'mother',
          name: '초롱이',
        },
        {
          url: './person_images/photos/dog4.jpg',
          family_type: 'children',
          name: '다롱이',
        },
        {
          url: './person_images/photos/dog6.jpg',
          family_type: 'children',
          name: '아롱이',
        },
        {
          url: './person_images/photos/dog8.jpg',
          family_type: 'children',
          name: '새롱이',
        },
        {
          url: './person_images/photos/dog9.jpg',
          family_type: 'children',
          name: '메롱이',
        }
      ]
    }
  }

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
                    {this.state.families.map((photo, i) => {
                      if(photo.family_type === 'father'){
                        return (<img src={photo.url} className="parents-img" alt="" />)
                      } else if(photo.family_type === 'mother'){
                        return (<img src={photo.url} className="parents-img" alt="" />)
                      }
                    })}
                  </div>
                  <div className="child">
                    {this.state.families.map((photo, i) => {  
                      if(photo.family_type === 'children'){
                        return (<img src={photo.url} className="child-img" alt="" />)
                      }
                    })}
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
