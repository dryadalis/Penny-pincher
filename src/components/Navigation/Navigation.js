import React from 'react';

import AuthUserContext from '../AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes'
import { Navbar,
        Nav,
        NavItem,
} from 'react-bootstrap'
import './Navigation.css';


const Navigation = ({ authUser }) =>
    <AuthUserContext.Consumer>
        {authUser => authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Navbar
        collapseOnSelect
        fixedTop
        >
        <Navbar.Header>
            <Navbar.Brand className="navbar--brand" >
                PENNY-PINCHER
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem href={routes.LANDING}>
                    Landing
                </NavItem>
                <NavItem href={routes.HOME}>
                    Home
                </NavItem>
                <NavItem href={routes.ACCOUNT}>
                    Account
                </NavItem>
                <NavItem>
                    <SignOutButton />
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

const NavigationNonAuth = () =>
    <Navbar
        collapseOnSelect
        fixedTop
        className='navbar'
    >
        <Navbar.Header>
            <Navbar.Brand className='navbar--brand'>
                PENNY-PINCHER
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem href={routes.LANDING}>
                    Home
                </NavItem>
                <NavItem href={routes.SIGN_IN} id='logIn'>
                    Log In
                </NavItem>
                <NavItem href={routes.SIGN_UP} id="signUp">
                    Sign Up
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;


export default Navigation;
