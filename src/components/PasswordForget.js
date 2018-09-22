import  React from 'react';
import { Link } from 'react-router-dom';
import { auth }from '../firebase';
import {Grid, Row, Col, } from 'react-bootstrap';
import './passwordForget.css';
import MainButton from "./Buttons/MainButton";
import MainInput from "./SignForm/MainInput/MainInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock} from '@fortawesome/free-solid-svg-icons';


const PasswordForgetPage = () =>
   <Grid >
       <Row className="passwordForget">
           <Col xs={12} md={8} className="passwordForget--wrapper">
                <FontAwesomeIcon icon={faLock} size='4x' className="passwordForget--icon"/>
               <h2>Forgot Password?</h2>
                <p>Enter the email address you used to register, and we will send you an email to recover your password.</p>
               <PasswordForgetForm />
           </Col>
       </Row>
   </Grid>

const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: '',
};

class PasswordForgetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }
    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
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
          error
      } = this.state;

      const isInvalid = email === '';
      return(
          <form onSubmit={this.onSubmit} className="passwordForget--form">
              <MainInput
                  value={this.state.email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type='text'
                  placeholder='Email Address'
              />
              <MainButton disabled={isInvalid} type='secondary' onClick={this.onSubmit} title={'Reset My Password'} size={"medium"}/>
              {error && <p>{error.message}</p> }
          </form>
      );
    }
}
const PasswordForgetLink = () =>
    <p>
        <Link to="/pw-forget"> Forgot Password? </Link>
    </p>

export default PasswordForgetPage;

export {
    PasswordForgetLink,
    PasswordForgetForm,
}
