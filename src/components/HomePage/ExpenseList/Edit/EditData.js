import React from 'react';
import {auth, db} from "../../../../firebase/firebase";
import MainButton from '../../../Buttons/MainButton';
import Context from '../../../../firebase/firebasedb/validationContext/validationContext';
import SelectCategoryInput from "../../../Inputs/SelectCategoryInput";
import PriceInput from "../../../Inputs/PriceInput";
import NoteInput from "../../../Inputs/NoteInput";


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

    handleChange = (event) => {

        let userInput = event.target.value.toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".");
        this.setState({price: userInput})
    }



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
                    onChange={this.handleChange}
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