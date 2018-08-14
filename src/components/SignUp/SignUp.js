import React, {Component} from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import {Grid,
        Col,
        Row,
        Image,
        Form,
        FormGroup,
        FormControl,
        Button,
        Checkbox
} from 'react-bootstrap';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './SignUp.css'

import img from '../images/pexels-photo-583846.jpeg'



const SignUpPage = ({history}) =>
    <Grid className="container">
        <Row>
            <Col xs={12} md={7} style={{margin: '0', padding: '0'}}>
                <Image src={img} responsive className='signUpPage--image' />
            </Col>
            <Col xs={6} md={5} className='signUpPage--form'>
                    <h1 className='signUpPage--header'>sign up</h1>
                    <SignUpForm history={history}/>
            </Col>
        </Row>
    </Grid>
        // Capture user information
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
   [propertyName] : value,
});

class SignUpForm extends Component{
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;
        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
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
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        //Validation condition
        const isInValid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Form onSubmit={this.onSubmit} horizontal className="signUpPage--inputs" >
                    <FormGroup>
                        <FormControl
                            className="signUpPage--input"
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type='text'
                            placeholder='Full Name'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            className="signUpPage--input"
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type='text'
                            placeholder='Email Address'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            className="signUpPage--input"
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type='password'
                            placeholder='Password'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            className="signUpPage--input"
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type='password'
                            placeholder='Confirm Password'
                        />
                    </FormGroup>
                <Checkbox required
                          className="signUp--checkbox">
                    I agree to the <strong><a href='#'>Terms of User</a></strong>
                </Checkbox>
                <Button
                    type='submit'
                    disabled={isInValid}
                    bsStyle="primary"
                    bsSize="large"
                    block
                    className="signUp--button">
                    Sign Up
                </Button>
                { error && <p>{error.message}</p>}
            </Form>
        );
    }
}
const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}> Sign Up </Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};
