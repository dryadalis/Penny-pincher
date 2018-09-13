import React from 'react';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
                email: '',
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState({
                        authUse: authUser,
                        email: authUser.email,
                    })
                    : this.setState({authUser : null});
            })
        }
        render() {
            const { authUser, email } = this.state;
            return (
                <AuthUserContext.Provider value={{authUser, email}} >
                    <Component/>
                </AuthUserContext.Provider>
            );
        }
    }
    return WithAuthentication;
};


export default withAuthentication;

