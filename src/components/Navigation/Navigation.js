import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes'
import { Navbar,
        Nav,
        NavItem,
        Button,
} from 'react-bootstrap'


const Navigation = ({ authUser }) =>
    <AuthUserContext.Consumer>
        {authUser => authUser
        ? <NavigationAuth />
        : <NavigationNonAuth/>
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand className="nav--logo">
                <a href='#'>Penny-pincher</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem>
                    <Link to={routes.LANDING}>Landing</Link>
                </NavItem>
                <NavItem>
                    <Link to={routes.HOME}>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to={routes.ACCOUNT}>Account</Link>
                </NavItem>
                <NavItem>
                    <SignOutButton/>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

const NavigationNonAuth = () =>
    <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href='#' style={{marginTop:'8%'}}>PENNY-PINCHER</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem>
                    <Link to={routes.LANDING}>Landing</Link>
                </NavItem>
                <NavItem>
                    <Link to={routes.SIGN_IN}>Sign In</Link>
                </NavItem>
                <NavItem>
                    <Link to={routes.SIGN_UP}>Sign Up</Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;


export default Navigation;
