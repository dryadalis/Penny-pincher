
import React from 'react';
import { db } from '../firebase/firebase';
import 'firebase/firestore';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import MainInput from '../components/SignForm/MainInput/MainInput';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
const INITIAL_STATE = {
    category: '',
    price: '',
    note: '',
    error: null,
};

class AddToDb extends React.Component {
    constructor(props) {
        super(props);

        this.state={...INITIAL_STATE};
    }
    onSubmit = (error) => {
        const {
            category,
            price,
            note,
        } = this.state;
        db.collection('receits').add({
            category: category,
            price: price,
            note: note,
        })
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        error.preventDefault()
    };

    render(){
        const {
            category,
            price,
            note,
            error,
        } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                <FormControl
                        componentClass='select'
                        value={category}
                        onChange={event => this.setState(byPropKey('category', event.target.value))}
                >
                    <option value="" selected disabled>Select category</option>
                    <option value="food">Food</option>
                    <option value="clothes">Clothes</option>
                    <option value="fuel">Fuel</option>
                </FormControl>
                </FormGroup>
                <MainInput
                    value={price}
                    onChange={event => this.setState(byPropKey('price', event.target.value))}
                    type={'number'}
                    placeholder={'Price'}
                />
                <MainInput
                    value={note}
                    onChange={event => this.setState(byPropKey('note', event.target.value))}
                    type={'text'}
                    placeholder={'Note'}
                />
                <button type='submit' onClick={this.onSubmit}>Add</button>
                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}



export default AddToDb;