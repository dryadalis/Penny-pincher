import React from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import MainInput from '../../components/SignForm/MainInput/MainInput';

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
            loading,
        } = this.state;

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
                        <MainInput
                            required
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
                        {error && <p>{error.message}</p>}
                    </Form>
                    <hr/>

                    <button type='submit' onClick={this.onSubmit}>Add</button>
                </div>
            );
        }
    }



export default AddToDb;