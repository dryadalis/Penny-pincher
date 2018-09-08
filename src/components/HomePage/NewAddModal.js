import  React from 'react';
import {Button, Header, Icon, Modal } from 'semantic-ui-react';
import MainButton from "../Buttons/MainButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons/index";
import './NewAddModal.css'

class AddToDbModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false,
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };



    render() {
        return(
            <Modal trigger={<MainButton type="add" title={<FontAwesomeIcon icon={faPlus} className="modal--plusIcon" />} />}>
                <Modal.Header>Add transaction</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddToDbModal;