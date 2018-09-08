import React from 'react';
import {db} from "../firebase";
import MainButton from '../../components/Buttons/MainButton';
import Context from '../firebasedb/validationContext/validationContext';


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
        db.collection('receits')
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
                <input type='text'
                       value={newCategory}
                       onChange={event => this.setState(byPropKey('newCategory', event.target.value))} />
                <input
                    type="number"
                    value={newPrice}
                    onChange={event => this.setState(byPropKey('newPrice', event.target.value))}
                />
                <input type="text"
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