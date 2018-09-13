import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1 style={{marginTop: '80px'}}>Account: {authUser.email}</h1>
                <PasswordForgetForm/>
                <PasswordChangeForm/>
            </div>
        }
    </AuthUserContext.Consumer>;

export default AccountPage;