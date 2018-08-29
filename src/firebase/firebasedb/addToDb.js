import React from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import {Loader} from "../../components/Loader/Loader";
import Context from './validationContext/validationContext';
import ContextProvider from './validationContext/validationProvider';

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
        db.collection('receits').add({
            category: category,
            price: price,
            note: note,
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

        if (loading) {
            return <Loader />
        } else {
            return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <FormControl
                                required
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
                                required
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

                    <button type='submit' onClick={this.onSubmit}>Add</button>
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
