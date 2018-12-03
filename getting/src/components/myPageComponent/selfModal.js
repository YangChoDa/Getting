import React, { Component } from "react";
import "./selfModal.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class selfModal extends Component {
    constructor(props){
        super(props);

        this.state={
            password: '1111',
            thick: [
                '포메라니안',
                '푸들',
                '',
                '',
                '',
            ],
            age: '2',
        }
    }
  
    openModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    render() {
        return (
        <div>
            <Button onClick={this.openModal} outline color="warning">
            프로필 수정
            </Button>

            <div id="myModal" class="modal">
            <div class="modal-content" id="modalContent">
                <span class="close" onClick={this.closeModal}>
                &times;
                </span>

                <Form>
                <FormGroup>
                    <Label className="label_style" for="examplePassword">
                    비밀번호
                    </Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="비밀번호"
                    value={this.state.password}
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="label_style" for="exampleSelectMulti">
                    견종
                    </Label>
                    <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                    >
                    <option>포메라니안</option>
                    <option>푸들</option>
                    <option>치와와</option>
                    <option>진돗개</option>
                    <option>시바견</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label className="label_style" for="exampleText">
                    나이
                    </Label>
                    <Input type="text" name="age" id="age" placeholder="나이" />
                </FormGroup>
                <FormGroup>
                    <Label className="label_style" for="exampleFile">
                    프로필 사진
                    </Label>
                    <Input type="file" name="file" id="exampleFile" />
                </FormGroup>
                <Button className="subminBtn">Submit</Button>
                </Form>
            </div>
            </div>
        </div>
    );
  }
}

export default selfModal;
