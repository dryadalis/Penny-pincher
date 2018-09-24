import React from 'react';
import AuthUserContext from '../AuthUserContext';
import withAuthorization from "../withAuthorization";
import PasswordChangeModal from "./PasswordChange/PasswordChangeModal/PasswordChangeModal";
import './account.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";

class AccountPage extends React.Component {
    render( ){
        return(
            <AuthUserContext.Consumer>
                {authUser =>
                    <div>
                        <h1 className="account--header">
                            <FontAwesomeIcon icon={faUserCog} size='2x'/>
                            <br />
                            <strong>My Account:</strong>
                            <br/>
                            {authUser.email}</h1>
                        <PasswordChangeModal/>
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);