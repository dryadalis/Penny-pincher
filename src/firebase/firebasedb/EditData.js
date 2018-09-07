import React from 'react';
import {db} from "../firebase";
import MainButton from '../../components/Buttons/MainButton';
import Context from '../firebasedb/validationContext/validationContext';

class EditData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newCategory: '',
        }
    }

    upDateCategory = (event) => {
        this.setState({newCategory: event.target.value})
    };

    onSubmit = () => {
        db.collection('receits')
            .doc(this.props.itemid)
            .update({category: this.state.newCategory})
            .then(this.props.toggle())
            .then(this.props.handleClose())
    };

    render() {
        const { newCategory } = this.state;
        return(
            <div>
                <input type='text'
                       placeholder={this.props.itemcategory}
                       value={newCategory}
                       onChange={event => this.upDateCategory(event) }/>
                <MainButton type={"primary"} onClick={this.onSubmit} title={"Edit"} size={"small"} />
            </div>
        );
    }
    
}

export default (props) =>
    <Context.Consumer>
        {
            (value) =>
                <EditData {...value} {...props}/>
        }
    </Context.Consumer>