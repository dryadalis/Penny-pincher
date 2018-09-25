import React from 'react';
import {auth, db} from '../../../firebase/firebase';
import 'firebase/firestore';
import { Form,} from 'react-bootstrap';
import MainButton from '../../Buttons/MainButton';
import {Loader} from "../../Loader/Loader";
import Context from '../../../firebase/firebasedb/validationContext/validationContext';
import SelectCategoryInput from "../../Inputs/SelectCategoryInput";
import PriceInput from "../../Inputs/PriceInput";
import NoteInput from "../../Inputs/NoteInput";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
const INITIAL_STATE = {
    category: '',
    price: '',
    note: '',
    loading: false,
    error: null,
};

class AddToDb extends React.Component {
    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (error) => {
        const {
            category,
            price,
            note,
        } = this.state;
        this.setState({loading: true});
        const currentUser = auth.currentUser.uid;
        const newSuggestionReference = db.collection(currentUser).doc();

        newSuggestionReference.set({
            category: category,
            price: price,
            note: note,
            id: newSuggestionReference.id,
        })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.setState({loading: false});
                this.props.toggle();
                this.props.handleClose();
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        error.preventDefault();

    };
    handleChange = (event) => {

        let userInput = event.target.value.toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".");
        this.setState({price: userInput})
    }


    render(){
        const {
            category,
            price,
            note,
            error,
            loading,
        } = this.state;

        const isInvalid =
            category === '' ||
            price === '';
``
        if (loading) {
            return <Loader title={"Adding..."}/>
        } else {
            return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <SelectCategoryInput
                                value={category}
                                onChange={event => this.setState(byPropKey('category', event.target.value))}
                            />
                        <PriceInput
                            value={price}
                            onChange={this.handleChange}
                            placeholder="Price"
                        />
                            <NoteInput
                                value={note}
                                onChange={event => this.setState(byPropKey('note', event.target.value))}
                                placeholder='Note'
                            />
                    </Form>
                    <hr/>
                    {error && <p>{error.message}</p>}
                    <MainButton type={"primary"} onClick={this.onSubmit} disabled={isInvalid} title={"Add"} size={"small"} />
                </div>
            );
        }
        }
    }



export default (props) =>
    <Context.Consumer>
        {
            (value) => (
                <AddToDb {...props} {...value}/>
            )
        }
    </Context.Consumer>
