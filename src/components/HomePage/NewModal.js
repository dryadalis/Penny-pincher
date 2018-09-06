import React from 'react';
import Modal from 'react-responsive-modal';

export default class NewModal extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return(
            <div>
                <button onClick={this.onOpenModal}>Open Modal</button>
                <Modal open={open} onClose={this.onCloseModal} little
                >
                    <h2>Simple centered modal</h2>
                </Modal>
            </div>
        );
    }
}