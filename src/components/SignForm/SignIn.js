import React from 'react';
import { withRouter } from  'react-router-dom';

import { SignUpLink } from './SignUp/SignUp';
import { auth } from '../../firebase/index';
import * as routes from '../../constants/routes';
import { PasswordForgetLink} from "../PasswordForget";
import {Grid, Row } from 'react-bootstrap';
import { MainImage } from "./MainImage/MainImage";
import MainForm from "./MainForm/MainForm";
import MainInput from '../SignForm/MainInput/MainInput';
import { Form } from 'react-bootstrap';


const SignInPage = ({history}) =>
    <Grid style={{width:'100%'}}>
        <Row>
                <MainImage />
                <MainForm title={"Sign In"}>
                    <SignInForm history={history} />
                    <PasswordForgetLink />
                    <SignUpLink />
                </MainForm>
        </Row>
    </Grid>;

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
                history.push(routes.HOME);
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
            <Form onSubmit={this.onSubmit}  horizontal style={{width:'320px'}}>
                <MainInput
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    placeholder={'Email Address'}
                    type={'text'}
                />
                <MainInput
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type={'password'}
                    placeholder={'Password'}
                />
                <button disabled={isInvalid} type='submit'>
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
        </Form>
        )
    }
}


export default withRouter (SignInPage);

export  {
    SignInForm,
}