import React from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import MainButton from '../../components/Buttons/MainButton';
import {Loader} from "../../components/Loader/Loader";
import Context from './validationContext/validationContext';

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
        const newSuggestionReference = db.collection('receits').doc();

        newSuggestionReference.set({
            category: category,
            price: price,
            note: note,
            id: newSuggestionReference.id
        })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.setState({loading: false});
                this.props.toggle();
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        error.preventDefault();

    };

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

        if (loading) {
            return <Loader title={"Adding..."}/>
        } else {
            return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <FormControl
                                required="true"
                                componentClass='select'
                                value={category}
                                onChange={event => this.setState(byPropKey('category', event.target.value))}
                            >
                                <option value="" defaultValue disabled>Select category</option>
                                <option value="clothes">Clothes</option>
                                <option value="fuel">Fuel</option>
                                <option value="food">Food</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                value={price}
                                onChange={event => this.setState(byPropKey('price', event.target.value))}
                                min='0'
                                type='number'
                                placeholder='Price'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                value={note}
                                onChange={event => this.setState(byPropKey('note', event.target.value))}
                                type='text'
                                placeholder='Note'
                            />
                        </FormGroup>
                        {error && <p>{error.message}</p>}
                    </Form>
                    <hr/>
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
