import React from 'react';
import { withRouter } from  'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes'

const SignInPage = ({history}) =>
    <div>
        <h1>Sign In</h1>
        <SignInForm history={history} />
        <SignUpLink />
    </div>
const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;
        const {
            history,
        } = this.props;
        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    };

    render() {
        const {
            email,
            password,
            error,
        } = this.state;
        const isInvalid =
            password === '' ||
            email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type='text'
                    placeholder="Email Address"
                    />
                <input
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type='password'
                    placeholder="Password"
                />
                <button disabled={isInvalid} type='submit'>
                    Sign In
                </button>
            </form>
        )
    }
}


export default withRouter (SignInPage);

export  {
    SignInForm,
}