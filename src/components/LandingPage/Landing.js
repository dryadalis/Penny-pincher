import React from 'react';
import {
    Grid,
    Image,
} from 'semantic-ui-react'

import './Landing.css';
import { RedirectionButton} from "../Buttons/RedirectionButton";
import img from '../images/imageedit_6_2261919941.png';
import AuthUserContext from '../AuthUserContext';
import MainButton from "../Buttons/MainButton";

const LandingPage = () =>
    <Grid className="landingPage">
        <Grid.Row>
            <Grid.Column width={8} className="landingPage--text">
                <h1 className='landingPage--text__header'>penny-pincher</h1>
                <p className='landingPage--text__para'>Because money matters.</p>
                <AuthUserContext.Consumer>
                    {authUser=> authUser
                        ?  <MainButton
                        type={'primary'}
                        size={'large'}
                        title={"Learn more"}
                        />
                        : <RedirectionButton
                            type={'primary'}
                            size={'large'}
                            route={"SignUp"}
                            title={"Try free for 20 days"}
                        />
                    }
                </AuthUserContext.Consumer>
            </Grid.Column>
            <Grid.Column width={8} className="landingPage--image">
                <Image src={img} responsive style={{ marginTop: '80px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto'}}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>;

export default LandingPage;