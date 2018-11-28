import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import "./Menu.css";

class Menu extends Component {
  photos = [];
  
  constructor(props) {
    super(props);
    this.photos = props.photos.map(photo => {
      return <img key={photo.url} src={photo.url} />;
    });
    this.state = {
        menuBtn: "photos"
      };
  }

  setValue = (e) => {
    this.setState({ menuBtn: e });
    // this.state = {menuBtn:e};    
  }

  render() {
    let menuState;
    if(this.state.menuBtn === 'photos'){
        menuState = <div className="photos">{this.photos}</div>;
    }else if(this.state.menuBtn === 'diaries'){
        menuState = <div className="diaries" />;
    }else if(this.state.menuBtn === 'families'){
        menuState = <div className="families" />;
    }else{
        menuState = <div className="visitors" />;
    }
    return (
      <div className="menu">
        <ButtonToolbar>
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue="photos"
            onChange={this.setValue}
          >
            <ToggleButton value="photos">Photos</ToggleButton>
            <ToggleButton value="diaries">Diary</ToggleButton>
            <ToggleButton value="families">Family</ToggleButton>
            <ToggleButton value="visitors">방명록</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        {menuState}
      </div>
    );
  }
}

export default Menu;
