import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "react-tabs/style/react-tabs.css";
import './profile.css';

export default class profile extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     activeTab: '1'
  //   };
  // }

  // toggle(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab
  //     });
  //   }
  // }

  render() {
    // return(
    //   <div>
    //   <Nav tabs>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: this.state.activeTab === '1' })}
    //         onClick={() => { this.toggle('1'); }}
    //       >
    //         Tab1
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: this.state.activeTab === '2' })}
    //         onClick={() => { this.toggle('2'); }}
    //       >
    //         Moar Tabs
    //       </NavLink>
    //     </NavItem>
    //   </Nav>
    //   <TabContent activeTab={this.state.activeTab}>
    //     <TabPane tabId="1">
    //       <Row>
    //         <Col sm="12">
    //           <h4>Tab 1 Contents</h4>
    //         </Col>
    //       </Row>
    //     </TabPane>
    //     <TabPane tabId="2">
    //       <Row>
    //         <Col sm="6">
    //           <Card body>
    //             <CardTitle>Special Title Treatment</CardTitle>
    //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //             <Button>Go somewhere</Button>
    //           </Card>
    //         </Col>
    //         <Col sm="6">
    //           <Card body>
    //             <CardTitle>Special Title Treatment</CardTitle>
    //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //             <Button>Go somewhere</Button>
    //           </Card>
    //         </Col>
    //       </Row>
    //     </TabPane>
    //   </TabContent>
    // </div>
    // );


    return (
      <Tabs>
        <TabList>
          <Tab>my pet 1</Tab>
          <Tab>my pet 2</Tab>
        </TabList>

        <TabPanel>
          <div className="body">
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
