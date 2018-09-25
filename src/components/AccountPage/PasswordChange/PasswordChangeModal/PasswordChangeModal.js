import React from 'react';
import {Modal,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PasswordChangeForm from "../PasswordChangeForm/PasswordChange";
import '../../../HomePage/Add/AddModal/addmodal.css';
import './passwordChangeModal.css';

class PasswordChangeModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleShow} className="passwordChange--button">
                   <FontAwesomeIcon icon={faArrowRight} /> Reset My Password
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton className='modal--header'>
                        <Modal.Title>Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PasswordChangeForm onClick={this.handleClose}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PasswordChangeModal;
