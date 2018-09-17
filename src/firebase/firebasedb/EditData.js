import React from 'react';
import {auth, db} from "../firebase";
import MainButton from '../../components/Buttons/MainButton';
import Context from '../firebasedb/validationContext/validationContext';
import SelectCategoryInput from "./validationContext/SelectCategoryInput";
import PriceInput from "./validationContext/PriceInput";
import NoteInput from "./NoteInput";


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
class EditData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newCategory: props.itemCategory,
            newPrice: props.itemPrice,
            newNote: props.itemNote,
        }
    }

    onSubmit = () => {
        db.collection(auth.currentUser.uid)
            .doc(this.props.itemId)
            .update({
                category: this.state.newCategory,
                price: this.state.newPrice,
                note: this.state.newNote,
            })
            .then(this.props.toggle())
            .then(this.props.handleClose())
    };


    render() {
        const { newCategory, newPrice, newNote } = this.state;
        return(
            <div>
                <SelectCategoryInput
                        type='text'
                       value={newCategory}
                       onChange={event => this.setState(byPropKey('newCategory', event.target.value))} />
                <PriceInput
                    value={newPrice}
                    onChange={event => this.setState(byPropKey('newPrice', event.target.value))}
                />
                <NoteInput
                        value={newNote}
                       onChange={event => this.setState(byPropKey('newNote', event.target.value))}
                    />
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