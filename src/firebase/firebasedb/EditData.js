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