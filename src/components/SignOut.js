import React from 'react';
import { Link,
    withRouter
} from 'react-router-dom';
import * as routes from '../constants/routes'

import { auth } from '../firebase';

const SignOutButton = withRouter (({ history }) => (
    <button
       type='button'
       onClick={() => {
           history.push(routes.LANDING);
           auth.doSignOut();
       }}
       >
        Sign Out
    </button>
));

export default SignOutButton;