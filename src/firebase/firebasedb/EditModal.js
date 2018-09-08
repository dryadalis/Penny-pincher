import React from 'react';
import {Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt,} from "@fortawesome/free-solid-svg-icons/index";
import EditData from './EditData';

class EditModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleShow}
                    style={{
                        backgroundColor:'transparent',
                        border: 'none',
                    }}
                >
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton className='modal--header'>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <EditData
                           itemId={this.props.itemId}
                           itemCategory={this.props.itemCategory}
                           itemPrice={this.props.itemPrice}
                           itemNote={this.props.itemNote}
                           handleClose={this.handleClose}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default EditModal;