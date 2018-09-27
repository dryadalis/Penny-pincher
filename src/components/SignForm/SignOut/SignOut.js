import React from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes'
import { auth } from '../../../firebase/index';
import MainButton from "../../Buttons/MainButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


const SignOutButton = withRouter(({ history }) => (
    <MainButton
        onClick={() => {
            history.push(routes.LANDING);
            auth.doSignOut();
        }}
        title={ <FontAwesomeIcon icon={faSignOutAlt} /> }
        type='signOut'
    />
));
export default SignOutButton;