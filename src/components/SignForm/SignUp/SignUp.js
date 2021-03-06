import React, {Component} from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import {Grid,
    Row,
    Form,
    Checkbox,
} from 'react-bootstrap';
import { auth } from '../../../firebase/index';
import * as routes from '../../../constants/routes';
import './SignUp.css'
import MainForm from "../MainSignForm/MainForm";
import { MainImage } from '../MainImage/MainImage';
import MainInput from '../MainInput/MainInput';
import MainButton from "../../Buttons/MainButton";
import mainImg from '../../images/rawpixel-570908-unsplash.jpg';

const SignUpPage = ({history}) =>
    <Grid>
        <Row>
            <MainImage src={mainImg}/>
            <MainForm title={"Sign Up"}>
                <SignUpForm history={history}/>
            </MainForm>
        </Row>
    </Grid>;
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
            email,
            passwordOne,
        } = this.state;
        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser) => {

                this.setState({...INITIAL_STATE});
                history.push(routes.HOME)
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
            <Form onSubmit={this.onSubmit} className='sign--form' >
                <MainInput
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type={'text'}
                    placeholder={'Full Name'}
                />
                <MainInput
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type={'text'}
                    placeholder={'Email Address'}
                />
                <MainInput
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type={'password'}
                    placeholder={'Password'}
                />
                <MainInput
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type={'password'}
                    placeholder={'Confirm Password'}
                />
                <Checkbox
                    required
                    className="signUp--checkbox">
                    I agree to the <strong><a href='#'>Terms of User</a></strong>
                </Checkbox>
                <MainButton
                    type='secondary'
                    size={'medium'}
                    disabled={isInValid}
                    className="signUp--button"
                    title={"Sign Up"} />
                { error && <p>{error.message}</p>}
            </Form>
        );
    }
}
const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}> Sign Up! </Link>
    </p>;
export default withRouter(SignUpPage);
export {
    SignUpForm,
    SignUpLink,
};