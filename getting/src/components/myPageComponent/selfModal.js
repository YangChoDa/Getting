import React, { Component } from "react";
import "./selfModal.css";

class selfModal extends Component {


    openModal() {
        const modal = document.getElementById('myModal');

        modal.style.display = "block";

        
    }

    closeModal(){
        const modal = document.getElementById('myModal');

        modal.style.display = "none";
    }

    render() {
        return (
            <div>
                <button id="myBtn" onClick={this.openModal}>Open Modal</button>

                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close" onClick={this.closeModal}>&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default selfModal;

