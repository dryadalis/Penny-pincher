import React from 'react';
import {
  BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/Landing';
import SignUpPage from './SignForm/SignUp/SignUp';
import SignInPage from './SignForm/SignIn/SignIn';
import PasswordForgetPage from './PasswordForget/PasswordForget';
import HomePage from './HomePage/Home/Home';
import AccountPage from './AccountPage/Account/Account';
import * as routes from '../constants/routes';
import withAuthentication from '../firebase/firebasedb/auth/withAuthentication';
import './HomePage/Add/addToDb';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import ContextProvider from "../firebase/firebasedb/validationContext/validationProvider";

library.add(faStroopwafel);


const App = () =>
    <Router>
        <div>
            <Navigation />
            <Route
                exact path={routes.LANDING}
                component={() => <LandingPage />}
            />
            <Route
                exact path={routes.SIGN_UP}
                component={() => <SignUpPage/>}
            />
            <Route
                exact path={routes.SIGN_IN}
                component={() => <SignInPage/>}
            />
            <Route
                exact path={routes.PASSWORD_FORGET}
                component={() => <PasswordForgetPage/>}
            />
            <Route
                exact path={routes.HOME}
                component={() => <ContextProvider><HomePage/></ContextProvider>}
            />
            <Route
                exact path={routes.ACCOUNT}
                component={() => <AccountPage/>}
            />
        </div>
    </Router>;
export default withAuthentication(App);
