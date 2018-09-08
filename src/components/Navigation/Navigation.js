import React from 'react';

import AuthUserContext from '../AuthUserContext';
import SignOutButton from '../SignForm/SignOut/SignOut';
import * as routes from '../../constants/routes'
import { Menu, Sticky } from 'semantic-ui-react';
import './Navigation.css';


const Navigation = ({ authUser }) =>
    <AuthUserContext.Consumer>
        {authUser => authUser
        ? <NavigationAuth/>
        : <NavigationNonAuth/>
        }
    </AuthUserContext.Consumer>;


class NavigationAuth extends React.Component {

    state={} ;
    handleItemClick = (e, { name }) => this.setState({activeItem: name});

    render() {
        const{ activeItem } = this.state;

        return (
            <Sticky>
            <Menu
                stackable
                fixed="top"
            >
                <Menu.Item header>
                    Penny-pincher
                </Menu.Item>

                <Menu.Menu>
                    <Menu.Item
                        href={routes.LANDING}
                        name='landing'
                        active={activeItem === 'landing'}
                        onClick={this.handleItemClick}
                    >
                        Landing
                    </Menu.Item>
                    <Menu.Item
                        href={routes.HOME}
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        href={routes.ACCOUNT}
                        name='account'
                        active={activeItem === 'account'}
                        onClick={this.handleItemClick}
                    >
                        Account
                    </Menu.Item>
                    <Menu.Item>
                        <SignOutButton />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            </Sticky>
        );
    }
}

class  NavigationNonAuth extends React.Component {

    state={} ;
    handleItemClick = (e, { name }) => this.setState({activeItem: name});

    render() {
        const { activeItem } = this.state;
        return (
            <Menu
                fixed="top"
                stackable
                className="menu--white"
            >
                <Menu.Item header >
                    PENNY-PINCHER
                </Menu.Item>
                <Menu.Menu
                    position="right"
                >
                    <Menu.Item
                        href={routes.LANDING}
                        name='home'
                       
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        href={routes.SIGN_IN}
                        id='logIn'
                    >
                        Log In
                    </Menu.Item>
                    <Menu.Item
                        href={routes.SIGN_UP}
                        id="signUp"
                    >
                        Sign Up
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}



export default Navigation;
