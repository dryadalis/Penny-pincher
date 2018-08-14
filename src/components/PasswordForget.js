import  React from 'react';
import { Link } from 'react-router-dom';

import { auth }from '../firebase';

const PasswordForgetPage = () =>
    <div>
        <h1>Password Forget</h1>
        <PasswordForgetForm />
    </div>

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
          <form onSubmit={this.onSubmit}>
              <input
                  value={this.state.email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type='text'
                  placeholder='Email Address'
              />
              <button disabled={isInvalid} type='submit'>
                  Reset My Password
              </button>
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
