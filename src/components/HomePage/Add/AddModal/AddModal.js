import React from 'react';
import {Modal} from 'react-bootstrap';
import MainButton from '../../Buttons/MainButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './addmodal.css';
import AddToDb from '../../../firebase/firebasedb/addToDb';

class AddModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    handleClose = (e) => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({show: true});
    };



    render() {
        return (
            <div>
                <MainButton onClick={this.handleShow} type='add' title={<FontAwesomeIcon icon={faPlus} className="modal--plusIcon" />} />

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton className='modal--header'>
                        <Modal.Title>Add transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <AddToDb handleClose={this.handleClose} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default AddModal;