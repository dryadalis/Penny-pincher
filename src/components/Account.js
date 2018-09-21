import React from 'react';

import AuthUserContext from './AuthUserContext';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from "./withAuthorization";

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1 style={{marginTop: '100px'}}>Account: {authUser.email}</h1>
                <PasswordChangeForm />
            </div>
}
</AuthUserContext.Consumer>;
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);