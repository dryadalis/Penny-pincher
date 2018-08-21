import React from 'react';
import {Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MainButton from './Buttons/MainButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './modal.css';
import AddToDb from '../firebasedb/addToDb';

class Popup extends React.Component {
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
                <MainButton onClick={this.handleShow} type='add' title={<FontAwesomeIcon icon={faPlus} size='2x' />} />

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton className='modal--header'>
                        <Modal.Title>Add transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddToDb />
                    </Modal.Body>
                    <Modal.Footer>
                        <MainButton type='secondary' title='Add'/>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default Popup;