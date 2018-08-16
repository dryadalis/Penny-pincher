import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes'
import { auth } from '../firebase';
import MainButton from "./Buttons/MainButton";

const SignOutButton = withRouter(({ history }) => (
    <MainButton
        onClick={() => {
            history.push(routes.LANDING);
            auth.doSignOut();
        }}
        title={'Sign out'}
    />
));
export default SignOutButton;