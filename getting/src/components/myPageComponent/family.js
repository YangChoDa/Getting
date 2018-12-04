import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Link} from 'react-router-dom';
import "react-tabs/style/react-tabs.css";
import "bootstrap/dist/css/bootstrap.css";
import "./family.css";

export default class family extends Component {
  constructor(props) {
    super(props);

    this.state = {
      family1: [
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
      ],
      family2: [
        {
          url: './images/pat1.png',
          family_type: 'father',
          name: '인절미',
        },
        {
          url: './person_images/photos/siba1.jpg',
          family_type: 'mother',
          name: '시바',
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
      <Tabs className="tab-div">
        <TabList>
          <Tab>family1</Tab>
          <Tab>family2</Tab>
        </TabList>
        <TabPanel>
          <div className="div-body">
            <div className="div-container">
              <div className="div-outer">
                <div className="div-inner">
                  <div className="parents">
                    {this.state.family1.map((family) => {
                      if(family.family_type === 'father'){
                        return (<img src={family.url} className="parents-img" alt="" />)
                      } else if(family.family_type === 'mother'){
                        return (<img src={family.url} className="parents-img" alt="" />)
                      }
                    })}
                  </div>
                  <div className="child">
                    {this.state.family1.map((family) => {  
                      if(family.family_type === 'children'){
                        return (<Link to="/person/children"><img src={family.url} className="child-img" alt="" /></Link>)
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="div-body">
            <div className="div-container">
              <div className="div-outer">
                <div className="div-inner">
                  <div className="parents">
                    {this.state.family2.map((family) => {
                      if(family.family_type === 'father'){
                        return (<img src={family.url} className="parents-img" alt="" />)
                      } else if(family.family_type === 'mother'){
                        return (<img src={family.url} className="parents-img" alt="" />)
                      }
                    })}
                  </div>
                  <div className="child">
                    {this.state.family2.map((family) => {  
                      if(family.family_type === 'children'){
                        return (<Link to="/person/children"><img src={family.url} className="child-img" alt="" /></Link>)
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }
}
