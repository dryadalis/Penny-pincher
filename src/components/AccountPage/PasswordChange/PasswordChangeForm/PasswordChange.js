import React from 'react';
import { auth } from "../../../../firebase/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import MainButton from '../../../Buttons/MainButton';
import MainInput from "../../../SignForm/MainInput/MainInput";
import {Grid, Row, Col} from 'react-bootstrap';
import './passwordchange.css';


const byPropKey = (propertyName, value) => () => ({
   [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    type: 'password',
    error: null,
};

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }
    onSubmit = (event) => {
        const { passwordOne } = this.state;

        auth.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    };

    togglePassword = (e) => {
        e.preventDefault();
        this.setState({
            type: this.state.type === 'password' ? 'input' : 'password'
         })
    }
    render() {
      const {
          passwordOne,
          passwordTwo,
          type,
          error
      }  = this.state;

      const isInvalid =
          passwordOne !== passwordTwo ||
          passwordOne === '';

      return(
          <Grid>
              <Row>
                  <Col xs={12} className="passwordChange--toggleIcon">
                      <span onClick={this.togglePassword}>{type === 'password' ? <FontAwesomeIcon icon={faEyeSlash} />   : <FontAwesomeIcon icon={faEye}/> }</span>
                  </Col>
                  <Col xs={12} md={8} className='passwordChange'>
                    <form onSubmit={this.onSubmit} className='passwordChange--wrapper'>
                        <MainInput
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type={type}
                            placeholder='New Password'
                        />
                        <MainInput
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type={type}
                            placeholder='Confirm New Password'
                        />
                        <MainButton type='secondary' disabled={isInvalid} title={"Confirm"} size={'small'} onClick={this.onSubmit}/>
                        { error && <p>{error.message}</p> }
                    </form>
                  </Col>
              </Row>
          </Grid>
      );
    }
}

export default PasswordChangeForm;